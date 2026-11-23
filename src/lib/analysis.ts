/**
 * Pure analysis logic for the input diagnostics.
 *
 * Kept free of React and DOM access so the rules that decide whether a
 * device is healthy can be tested directly.
 */

export type WheelSample = {
  /** Signed vertical scroll delta. Positive scrolls down, negative up. */
  delta: number;
  /** Timestamp in milliseconds. */
  t: number;
};

export type WheelAnalysis = {
  up: number;
  down: number;
  total: number;
  /** Events whose direction contradicts the dominant direction of the run. */
  reverse: number;
  dominant: 1 | -1 | null;
  avgMagnitude: number;
  maxMagnitude: number;
  /** True when every step is a near-identical large jump — a notched wheel. */
  isNotched: boolean;
};

/** A notched wheel reports discrete, near-identical jumps of at least 40 units. */
const NOTCH_MIN_MAGNITUDE = 40;
const NOTCH_TOLERANCE = 0.12;
const NOTCH_MIN_SAMPLES = 7;

export function analyseWheel(samples: WheelSample[]): WheelAnalysis {
  const usable = samples.filter((sample) => sample.delta !== 0);

  let up = 0;
  let down = 0;
  let reverse = 0;
  let dominant: 1 | -1 | null = null;

  for (const sample of usable) {
    const direction: 1 | -1 = sample.delta > 0 ? 1 : -1;
    if (dominant === null) dominant = direction;

    if (direction === 1) down += 1;
    else up += 1;

    if (direction !== dominant) reverse += 1;
  }

  const magnitudes = usable.map((sample) => Math.abs(sample.delta));
  const total = magnitudes.length;
  const avgMagnitude = total
    ? magnitudes.reduce((sum, value) => sum + value, 0) / total
    : 0;
  const maxMagnitude = magnitudes.length ? Math.max(...magnitudes) : 0;

  const isNotched =
    total >= NOTCH_MIN_SAMPLES &&
    avgMagnitude >= NOTCH_MIN_MAGNITUDE &&
    magnitudes.every(
      (value) => Math.abs(value - avgMagnitude) / avgMagnitude < NOTCH_TOLERANCE,
    );

  return {
    up,
    down,
    total,
    reverse,
    dominant,
    avgMagnitude,
    maxMagnitude,
    isNotched,
  };
}

/** Two presses of the same button inside this window are switch chatter. */
export const CHATTER_WINDOW_MS = 40;

export type ChatterResult = {
  chatterEvents: number;
  /** Milliseconds between the two closest presses that were flagged. */
  closestGap: number | null;
};

/**
 * Detects switch chatter: a second press of the same button arriving while
 * the previous press is still within the chatter window.
 */
export function detectChatter(
  pressTimesByButton: Record<string, number[]>,
  windowMs: number = CHATTER_WINDOW_MS,
): ChatterResult {
  let chatterEvents = 0;
  let closestGap: number | null = null;

  for (const times of Object.values(pressTimesByButton)) {
    const sorted = [...times].sort((a, b) => a - b);
    for (let i = 1; i < sorted.length; i += 1) {
      const gap = sorted[i] - sorted[i - 1];
      if (gap < windowMs) {
        chatterEvents += 1;
        if (closestGap === null || gap < closestGap) closestGap = gap;
      }
    }
  }

  return { chatterEvents, closestGap };
}

/** Milliseconds between two presses, used to separate chatter from a double-click. */
export function isDoubleClickBounce(gapMs: number): boolean {
  return gapMs < CHATTER_WINDOW_MS;
}

export type RolloverResult = {
  registered: number;
  required: number;
  passed: boolean;
  missing: string[];
};

/**
 * A rollover test passes only when every target key registered. A missed key
 * under simultaneous pressure is a hardware rollover limit, not a dead key.
 */
export function evaluateRollover(
  targets: string[],
  registered: Set<string>,
): RolloverResult {
  const missing = targets.filter((target) => !registered.has(target));
  return {
    registered: targets.length - missing.length,
    required: targets.length,
    passed: missing.length === 0,
    missing,
  };
}

/** Polling rates that devices are commonly configured to report at. */
export const NOMINAL_POLLING_RATES = [125, 250, 500, 1000, 2000, 4000, 8000];

/**
 * Counts how many samples arrived in the window ending at `now`.
 * This is the reporting rate of the device, not the display refresh rate,
 * provided the samples come from raw coalesced events.
 */
export function pollingRateInWindow(
  timestamps: number[],
  now: number,
  windowMs = 1000,
): number {
  const cutoff = now - windowMs;
  let count = 0;
  for (const timestamp of timestamps) {
    if (timestamp >= cutoff) count += 1;
  }
  return count;
}

/** The standard polling rate closest to a measured value. */
export function nearestPollingRate(
  hz: number,
  nominals: number[] = NOMINAL_POLLING_RATES,
): number {
  return nominals.reduce((closest, value) =>
    Math.abs(value - hz) < Math.abs(closest - hz) ? value : closest,
  );
}

/**
 * How far a measured rate sits from the nearest standard rate, as a ratio.
 * A reading more than 20% away from a nominal rate is treated as unstable.
 */
export function pollingRateDeviation(hz: number): number {
  if (hz <= 0) return 1;
  const nominal = nearestPollingRate(hz);
  return Math.abs(nominal - hz) / nominal;
}

export type PollingMethod = "raw" | "frame";

export type PollingSummary = {
  /** Samples seen in the last second. */
  hz: number;
  peak: number;
  average: number;
  method: PollingMethod;
  nominal: number;
  deviation: number;
};

/**
 * Summarises a polling rate measurement.
 *
 * `rawSamples` is the number of coalesced pointer samples recovered across
 * the whole session; `frameSamples` is the number of raw pointer events. A
 * ratio much above one means the browser exposed sub-frame samples, so the
 * measured rate reflects the device rather than the display.
 */
export function summarisePolling(
  rawSamples: number,
  frameSamples: number,
  recentRates: number[],
  method: PollingMethod,
): PollingSummary {
  const hz = recentRates.length ? recentRates[recentRates.length - 1] : 0;
  const peak = recentRates.length ? Math.max(...recentRates) : 0;
  const average = recentRates.length
    ? recentRates.reduce((sum, value) => sum + value, 0) / recentRates.length
    : 0;
  const nominal = nearestPollingRate(hz);
  return {
    hz,
    peak,
    average,
    method,
    nominal,
    deviation: pollingRateDeviation(hz),
  };
}
