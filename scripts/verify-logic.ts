/**
 * Verifies the diagnostic rules that decide whether a device is healthy.
 * Run with: node scripts/verify-logic.ts
 */
import {
  analyseWheel,
  detectChatter,
  evaluateRollover,
  isDoubleClickBounce,
  nearestPollingRate,
  pollingRateDeviation,
  pollingRateInWindow,
  summarisePolling,
} from "../src/lib/analysis.ts";

let passed = 0;
let failed = 0;

function check(name: string, condition: boolean, detail?: unknown) {
  if (condition) {
    passed += 1;
    console.log(`  PASS  ${name}`);
  } else {
    failed += 1;
    console.log(`  FAIL  ${name}`, detail === undefined ? "" : detail);
  }
}

function samples(...deltas: number[]) {
  return deltas.map((delta, index) => ({ delta, t: index * 20 }));
}

console.log("\nwheel analysis");

const cleanDown = analyseWheel(samples(100, 100, 100, 100, 100, 100, 100));
check("clean downward scroll counts 7 down", cleanDown.down === 7);
check("clean downward scroll has 0 up", cleanDown.up === 0);
check("clean downward scroll has 0 reverse jumps", cleanDown.reverse === 0);
check("dominant direction is down", cleanDown.dominant === 1);
check("uniform 100-unit steps read as a notched wheel", cleanDown.isNotched === true);

const cleanUp = analyseWheel(samples(-100, -100, -100, -100, -100, -100, -100));
check("clean upward scroll has 0 reverse jumps", cleanUp.reverse === 0);
check("clean upward scroll dominant is up", cleanUp.dominant === -1);

const oneReverse = analyseWheel(samples(100, 100, 100, 100, -100, 100, 100));
check("a single opposite event is counted as a reverse jump", oneReverse.reverse === 1);
check("reverse jump does not inflate the up counter wrongly", oneReverse.up === 1);
check("reverse jump does not inflate the down counter wrongly", oneReverse.down === 6);

const trackpad = analyseWheel(samples(4.2, 5.1, 3.8, 4.4, 5.6, 3.9, 4.8, 5.2));
check("smooth small deltas are not read as a notched wheel", trackpad.isNotched === false);
check("smooth device still counts every event", trackpad.total === 8);

const jittery = analyseWheel(samples(100, 18, 140, 22, 96, 30, 110));
check("wildly uneven steps are not read as a notched wheel", jittery.isNotched === false);

const empty = analyseWheel([]);
check("no events yields zero totals", empty.total === 0 && empty.reverse === 0);
check("no events yields no dominant direction", empty.dominant === null);

console.log("\nchatter detection");

const chatter = detectChatter({
  left: [1000, 1015, 1030, 1500],
  right: [1200, 1210],
});
check("three close presses produce three chatter events", chatter.chatterEvents === 3);
check("closest gap is reported", chatter.closestGap === 10);

const cleanPresses = detectChatter({ left: [1000, 1200, 1500, 1900] });
check("normal single presses produce no chatter", cleanPresses.chatterEvents === 0);

const fastDouble = detectChatter({ left: [1000, 1080] });
check("an 80 ms gap is a double-click, not chatter", fastDouble.chatterEvents === 0);
check("a 15 ms gap is flagged as chatter", isDoubleClickBounce(15));
check("an 80 ms gap is not flagged as chatter", !isDoubleClickBounce(80));

console.log("\nrollover evaluation");

const fullPass = evaluateRollover(["q", "w", "e"], new Set(["q", "w", "e"]));
check("all targets registered passes", fullPass.passed === true);
check("all targets registered reports 3 of 3", fullPass.registered === 3);

const oneMissed = evaluateRollover(["q", "w", "e"], new Set(["q", "w"]));
check("a missed target fails the rollover test", oneMissed.passed === false);
check("the missed target is named", oneMissed.missing.join(",") === "e");

console.log("\npolling rate");

const thousandHz = Array.from({ length: 1000 }, (_, i) => 1000 + i);
check(
  "1000 samples in the last second reads as 1000 Hz",
  pollingRateInWindow(thousandHz, 2000) === 1000,
);
check(
  "samples outside the window are excluded",
  pollingRateInWindow([...Array.from({ length: 500 }, (_, i) => 500 + i), ...thousandHz], 2000) === 1000,
);
check("an empty sample list reads as 0 Hz", pollingRateInWindow([], 2000) === 0);
check("1000 Hz maps to the 1000 nominal rate", nearestPollingRate(1000) === 1000);
check("990 Hz still maps to the 1000 nominal rate", nearestPollingRate(990) === 1000);
check("8 Hz maps to the lowest nominal rate", nearestPollingRate(8) === 125);
check("a stable 1000 Hz reading has ~0% deviation", pollingRateDeviation(1000) < 0.01);
check("a 700 Hz reading deviates well over 20%", pollingRateDeviation(700) > 0.2);
check("zero Hz does not divide by zero", pollingRateDeviation(0) === 1);

const stable = summarisePolling(1000, 60, [1000, 1002, 998, 1001], "raw");
check("summary reports the latest rate", stable.hz === 1001);
check("summary reports the peak rate", stable.peak === 1002);
check("summary keeps the raw method", stable.method === "raw");
check("summary resolves the nominal rate", stable.nominal === 1000);

const frameOnly = summarisePolling(60, 60, [60, 60], "frame");
check("frame-level sampling stays labelled as frame", frameOnly.method === "frame");
check("frame-level sampling does not resolve a nominal device rate", frameOnly.nominal === 125);

console.log(`\n${passed} passed, ${failed} failed\n`);
if (failed > 0) process.exit(1);