import type { ToolContent } from "../types";

export const pollingRateTest: ToolContent = {
  slug: "polling-rate-test",
  name: "Polling Rate Test",
  h1: "Polling Rate Test",
  metaTitle: "Polling Rate Test — Measure Your Mouse Polling Rate in Hz",
  metaDescription:
    "Measure your mouse polling rate in the browser using raw coalesced pointer events. See average Hz, peak Hz and stability, and find out which sampling method your browser used.",
  category: "Mouse Tools",
  intro: [
    "Polling rate is how often your mouse reports its position to the computer, measured in hertz. A 1000 Hz mouse reports its position a thousand times a second; a 125 Hz mouse reports a hundred and twenty-five times. The test measures the rate your browser actually receives and shows both the average and the peak.",
    "The measurement is taken from raw pointer events, which recover the samples the browser coalesces into a single frame. That matters: without raw sampling, a 1000 Hz mouse reads as 60 or 120 Hz on a 60 or 120 Hz display, which is the single most common mistake in browser-based polling rate tests.",
  ],
  steps: [
    {
      title: "Put your cursor over the test area",
      body: "The area needs to receive continuous pointer movement. Resting the mouse in the centre of a large pad and moving it in slow, wide circles gives the cleanest reading.",
    },
    {
      title: "Move the mouse continuously for ten seconds",
      body: "Keep moving. A reading taken while the mouse is stationary is meaningless, because most mice stop reporting when nothing is changing.",
    },
    {
      title: "Check the sampling method shown",
      body: "The panel reports whether raw coalesced events were available or whether the reading fell back to frame-level sampling. Raw sampling is what you want; a frame-level fallback caps the achievable reading at your display refresh rate.",
    },
    {
      title: "Read the stability figure",
      body: "A mouse polling at a stable rate shows a tight cluster around its nominal figure. Large variation usually means a connection problem rather than a different rate.",
    },
  ],
  sections: [
    {
      heading: "How the measurement works",
      paragraphs: [
        "Browsers sample pointer movement once per frame for rendering, but the underlying hardware reports much more often than that. A 1000 Hz mouse generates a position update every millisecond, and in a 16.7 millisecond frame at 60 Hz, roughly sixteen of those updates arrive during the frame. The browser discards all but the last one for rendering purposes.",
        "The coalesced events API recovers the discarded samples. Each pointer event carries the full list of positions that were folded into it, each with its own high-resolution timestamp. Dividing the sample count by the elapsed time gives the true reporting rate of the device rather than the rate of the display.",
        "Where that API is unavailable, the tool falls back to counting individual pointer events, which can only ever report at the display's refresh rate. The panel labels which method produced the number, so a 60 Hz reading on a 1000 Hz mouse is immediately identifiable as a fallback rather than a slow mouse.",
      ],
    },
    {
      heading: "Common polling rates and what they are worth",
      paragraphs: [
        "125 Hz was the long-standing default for office mice and is still common on budget hardware. 250 Hz and 500 Hz appear on mid-range gaming mice. 1000 Hz is the mainstream competitive standard. 2000 Hz, 4000 Hz and 8000 Hz appear on enthusiast boards, and require both a capable mouse and a browser that exposes raw pointer events.",
        "The practical benefit of moving from 125 Hz to 1000 Hz is real but modest: one to two milliseconds less input latency, which matters in competitive shooters and is imperceptible in ordinary work. The jump from 1000 Hz to 8000 Hz is much smaller still — well under a millisecond of additional benefit — and mostly shows up as higher CPU usage and more power draw.",
        "Higher polling rates also interact with frame rate. On a 240 Hz display, a 1000 Hz mouse is sampled roughly four times per frame, and the visible difference between 1000 Hz and 4000 Hz is minimal because the display cannot show it.",
      ],
    },
    {
      heading: "Why a reading might not match the box",
      paragraphs: [
        "Report rate is a property of the mouse, but what you measure is the rate at which your computer receives reports. Between the two sit the connection and the operating system, and both can reduce the effective rate.",
        "A 2.4 GHz wireless mouse at a short distance is usually stable. At range, or through interference, the receiver misses reports and the reading drops and fluctuates. The same happens with a low battery, where the mouse deliberately reduces its report rate to conserve power.",
        "USB polling settings matter too. A controller configured for 125 Hz will not deliver 1000 Hz reports regardless of what the mouse is capable of. On Windows, the advanced properties of a USB Root Hub expose the polling interval for the device.",
        "Finally, power management can interfere. On Windows, disabling USB selective suspend for the relevant controller is a common fix for mice that lose reports during idle periods.",
      ],
    },
    {
      heading: "High polling rates and your frame rate",
      paragraphs: [
        "There is a real trade-off. A mouse polling at 8000 Hz generates eight thousand pointer events every second, and each one carries work for the browser and the operating system. On a busy page, that can cost a meaningful amount of frame time.",
        "This is one of the reasons to test your polling rate on the page you actually play on rather than in isolation. If your game holds a stable frame rate with the mouse at 8000 Hz, keep it. If frame times become uneven, drop to 4000 Hz and compare. The difference in input latency between the two is smaller than the difference in smoothness.",
      ],
    },
  ],
  faqs: [
    {
      question: "What is a good polling rate for gaming?",
      answer:
        "1000 Hz is the sensible target for most competitive play. It is the mainstream standard, the latency difference over 500 Hz is small but measurable, and the CPU cost is manageable. Moving beyond that delivers diminishing returns unless you are chasing a specific game that benefits.",
    },
    {
      question: "Why does the browser show a lower polling rate than my mouse's specification?",
      answer:
        "Usually because the browser only exposed frame-level pointer events rather than raw coalesced ones, which caps the reading at your display refresh rate. The test panel states which method was used. If it reports a fallback, the true rate is higher than the number shown.",
    },
    {
      question: "Is 8000 Hz actually better than 1000 Hz?",
      answer:
        "Marginally, and mostly in frame time. The latency improvement is a fraction of a millisecond, which few players can perceive. The cost is eight times as many pointer events per second for the browser and operating system to handle, which can affect frame pacing on a busy page.",
    },
    {
      question: "How do I test my mouse polling rate?",
      answer:
        "Keep your cursor moving continuously over the test area for about ten seconds. Resting the mouse gives no reading, because most mice stop reporting when nothing is moving. Wide, slow circles produce the cleanest result.",
    },
    {
      question: "Why does my polling rate fluctuate during the test?",
      answer:
        "Fluctuation usually means reports are being lost between the mouse and the computer. Common causes are a weak wireless connection or interference, a low battery causing the mouse to reduce its rate, and USB power management suspending the port. A wired connection on a short cable is the baseline to compare against.",
    },
    {
      question: "Does the polling rate affect my cursor smoothness?",
      answer:
        "It affects the latency between your hand moving and the game responding. The visible smoothness of the cursor is capped by your display refresh rate, which is why a 1000 Hz mouse can look identical to a 500 Hz one on a 60 Hz display even though the input arrives sooner.",
    },
    {
      question: "Does this test work with wireless mice?",
      answer:
        "Yes, and wireless is where the reading is most informative. It will show both the nominal rate and how stable that rate is over time, which is how a connection problem becomes visible. A stable 1000 Hz reading means the link is healthy.",
    },
    {
      question: "Can I increase my mouse's polling rate?",
      answer:
        "Sometimes. Many gaming mice ship with software that lets you set the rate to 500, 1000 or 8000 Hz, and some have a physical switch on the underside for it. The test will show you the rate the mouse is currently configured to use.",
    },
  ],
  related: ["mouse-test", "cps-test", "scroll-test", "keyboard-test"],
};
