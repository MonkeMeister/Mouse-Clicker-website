import type { ToolContent } from "../types";

export const scrollTest: ToolContent = {
  slug: "scroll-test",
  name: "Scroll Wheel Test",
  h1: "Scroll Wheel Test",
  metaTitle: "Scroll Wheel Test — Check for Skipping, Reverse Scrolling and Jitter",
  metaDescription:
    "Test your mouse wheel online. Catches reverse scrolling, skipped notches and inconsistent step size, and shows whether your wheel, your browser or your OS is causing the problem. Free and instant.",
  category: "Mouse Tools",
  intro: [
    "A worn scroll wheel rarely stops working outright. It skips the occasional notch, scrolls a fraction too far in one direction, or jumps backwards in the middle of a long page. The scroll wheel test captures every wheel event your browser receives so you can see exactly what is happening, one event at a time.",
    "Run the test slowly first and then fast, because the two speeds expose completely different faults. A dirty encoder shows up at slow speeds. A failing encoder or a low-battery wireless connection shows up when you flick the wheel.",
  ],
  steps: [
    {
      title: "Choose a test duration",
      body: "Fifteen seconds is a good default. Use a longer window for a more reliable average, or switch to endless mode if you want to keep the graph running while you work.",
    },
    {
      title: "Scroll steadily in one direction",
      body: "Put your cursor over the test panel and scroll down only. The panel captures the wheel so the page itself does not move. Keeping one direction at a time matters, because reversing mid-run makes the direction analysis meaningless.",
    },
    {
      title: "Reverse and scroll up",
      body: "Once the run ends, start another and scroll up only. The up and down totals stay separate, so a wheel that only transmits in one direction becomes obvious.",
    },
    {
      title: "Read the verdict",
      body: "The report checks for reverse jumps, uneven step size and jitter. Combine it with the mouse button test if the wheel itself feels fine but the page still jumps around.",
    },
  ],
  sections: [
    {
      heading: "What the browser actually receives",
      paragraphs: [
        "Scrolling is not a single event. Every time you move the wheel, the operating system sends the browser a stream of individual updates, each carrying a vertical delta, a horizontal delta, and a unit flag. The test records that stream exactly as it arrives.",
        "The unit flag matters more than most people expect. Pixel mode is the modern default and is what you get from most modern wheels and every trackpad. Line mode and page mode are legacy behaviours, and some older drivers and remote desktop software still emit them. A wheel reporting in line mode is not necessarily broken, but it will feel different and can break scrolling inside some web apps that assume pixel deltas.",
        "Direction is encoded as sign. A positive vertical delta means the content moves up, which is what scrolling down does. A negative delta means scrolling up. That sign is exactly what the test watches for when it looks for reverse jumps.",
      ],
    },
    {
      heading: "Reverse scrolling, and what actually causes it",
      paragraphs: [
        "A reverse jump is a wheel event whose sign contradicts the direction you have been scrolling in. A handful of them during a fast flick is normal — the operating system applies a small amount of inertial smoothing that can nudge the final event of a gesture. A steady stream of them during slow, deliberate scrolling is a genuine fault.",
        "The usual cause is a dirty or worn encoder. The encoder is a small toothed wheel with two contact surfaces that slide past each other as the wheel turns. Dust, dried lubricant or a bent tooth creates a momentary break in contact, and the device briefly reports the opposite direction. Cleaning the encoder removes the fault in the large majority of cases.",
        "On macOS, check that natural scrolling has not simply been switched on. With natural scrolling, scrolling down moves the content down, and the sign of every event is inverted relative to what the test expects. Invert the direction in the test if you have it enabled, because the wheel is working perfectly.",
        "In a browser, use a single consistent direction for the entire run. Reversing mid-run is flagged, because it produces exactly the same signature as encoder chatter and would otherwise be reported as a fault that does not exist.",
      ],
    },
    {
      heading: "Skipped notches and uneven steps",
      paragraphs: [
        "Notched wheels report one discrete jump per detent. On a typical Windows mouse that is 100 or 120 units of vertical delta per notch, depending on the platform's pixel-per-line assumption. If you scroll down ten notches slowly and only eight increments arrive, the encoder is dropping contacts.",
        "Free-spinning wheels and trackpads behave differently and are not broken. They emit a smooth stream of many small deltas rather than discrete steps, so counting notches against them is meaningless. The test detects which of the two you are dealing with and labels the reading accordingly rather than scoring a healthy trackpad as a fault.",
        "Jitter is the variation in step size within a run. A small amount is expected even on a good wheel, because the optical encoder has finite resolution and the detent geometry is not perfectly uniform. Consistent large variation points to a bent encoder or a wheel that has been physically damaged.",
      ],
    },
    {
      heading: "Cleaning a wheel that skips or reverses",
      paragraphs: [
        "Power the mouse down completely first. On a wireless mouse, remove the batteries rather than just switching it off, so the encoder is not being held under load by residual power.",
        "Remove the mouse wheel and apply 90% isopropyl alcohol to a lint-free cloth. Let the alcohol soak into the encoder wheel and the gap where the encoder sits against the PCB. Rotate the wheel slowly through its full range about a dozen times so the alcohol reaches the contact surfaces, then let it dry completely before reassembling. Compressed air on its own tends to push debris further into the housing.",
        "If the wheel is still skipping after a proper clean, the encoder itself has worn. On a mouse with replaceable parts, a new encoder is inexpensive and restores the wheel completely. On a sealed mouse, this is the point at which replacement becomes the realistic option.",
        "While you are there, check the battery on a wireless mouse. Low battery voltage is a common cause of irregular wheel events that resolve themselves once the battery is replaced — worth ruling out before opening anything.",
      ],
    },
  ],
  faqs: [
    {
      question: "How do I test my scroll wheel?",
      answer:
        "Put your cursor over the test panel and scroll steadily in one direction, then repeat in the other. The panel captures the wheel so the page stays still while the events are recorded. Use a slow speed to expose a dirty encoder and a fast speed to expose a failing one.",
    },
    {
      question: "What does a reverse jump mean?",
      answer:
        "It is a wheel event that reports the opposite direction to the one you are scrolling. A few during a fast flick are normal smoothing artefacts. A steady stream during slow scrolling means the encoder contact is breaking and re-making, which is usually dust or a worn encoder and is fixable with cleaning.",
    },
    {
      question: "Can I test a trackpad or a Magic Mouse with this tool?",
      answer:
        "You can, and the tool will tell you it is handling a smooth device rather than a notched wheel. Trackpads and free-spinning wheels do not report physical detents, so counting notches against them would be meaningless. The test measures their speed and consistency instead of scoring them as faulty.",
    },
    {
      question: "My scroll wheel jumps backwards on Mac only. Is it broken?",
      answer:
        "Almost certainly not. macOS enables natural scrolling by default, which inverts the direction of every wheel event relative to what the test expects. Toggle natural scrolling off in System Settings, or invert the direction inside the test, and the readings will normalise.",
    },
    {
      question: "Why does my wheel skip only when I scroll fast?",
      answer:
        "Fast scrolling generates long, rapid bursts of events and gives the encoder less time to settle between detents. A wheel that is already marginal — lightly dirty, or running on a weak battery — tends to fail under that load. Test it slowly as well: if the slow run is clean and the fast run skips, the encoder is worn rather than the reporting being inconsistent.",
    },
    {
      question: "Is the scroll test accurate enough to judge a mouse?",
      answer:
        "It is accurate for the things a browser can observe: direction, unit mode, step size, event rate and consistency. It cannot measure the physical distance a wheel would turn, so it will not give you millimetres of travel per notch or tell you how worn the mechanical detent is.",
    },
    {
      question: "Does the test work on a touchscreen?",
      answer:
        "Touch scrolling produces touch events, not wheel events, so the wheel panel will stay empty on a touchscreen device. For phone input, the tools are aimed at mice, keyboards and other pointing devices.",
    },
    {
      question: "My wheel skips in games but not in normal use. Why?",
      answer:
        "Games frequently apply their own scroll handling, including smoothing and acceleration, and they often use raw input that bypasses some browser-level processing. A wheel that is only slightly worn can be fine under normal reading speeds and fail under the fast, repeated inputs a game generates. Test it with quick, repeated flicks rather than a single slow scroll.",
    },
  ],
  related: ["mouse-test", "polling-rate-test", "cps-test", "keyboard-test"],
};
