import type { BlogContent } from "../types";

export const blog: BlogContent = {
  metaTitle: "Blog",
  metaDescription:
    "Practical notes on input hardware, browser event APIs, and how to build better diagnostics for mice, keyboards and pointers.",
  heading: "Blog",
  lead: "Notes on input hardware, the browser event APIs that expose it, and how the diagnostics on this site are put together. Written for people who want to understand what their hardware is doing rather than just replace it.",
  posts: [
    {
      slug: "how-a-browser-sees-your-mouse",
      title: "How a browser actually sees your mouse",
      metaTitle: "How a browser actually sees your mouse",
      metaDescription:
        "What a browser actually receives when you move the mouse: the event stream, the coordinates it reports, how polling rate and pointer acceleration change it, and what a browser test can and cannot tell you.",
      excerpt:
        "Your cursor is not an object. It is a stream of position samples, and understanding where that stream comes from explains almost every hardware fault you will ever chase.",
      readTime: "8 min read",
      dateLabel: "23 November 2026",
      lead: "Your cursor is not an object the browser owns. It is a stream of position samples, produced by hardware the browser never sees and filtered by an operating system the page cannot configure. Understanding that pipeline explains why the same mouse feels different on different machines, and why no web page can tell you exactly what your mouse is doing.",
      sections: [
        {
          heading: "The cursor is an event stream, not an object",
          paragraphs: [
            "Open the developer tools and type document in the console. There is no cursor in there. There is no object representing the mouse pointer, no property to read for its position, and no way to ask a page where the pointer is at this instant. The browser does not keep a cursor. It keeps a history of movements that already happened.",
            "What a page receives is a sequence of pointermove events. Each one carries a snapshot of the pointer at a moment in the past: where it was, which button was down, what pressure the sensor reported, and how long the browser believes it has been since the previous event. Between those events there is no information at all. The pointer's position is not something the browser knows; it is something the browser was told, once per event, and then let go of.",
            "That single fact explains most of the strange behaviour people notice. A script cannot ask where the mouse is right now, it can only be notified. An application that reads the last known position lags by exactly one event. And a tab in the background stops receiving events altogether, so the stream it holds when you return is a gap, not a position.",
          ],
          bullets: [
            "pointermove fires for movement; pointerdown and pointerup fire for the buttons.",
            "Every event carries a timeStamp measured from the document's time origin, in milliseconds, as a double.",
            "Events coalesce: several movements can be merged into one event that reports only the final position.",
          ],
        },
        {
          heading: "Where the stream actually comes from",
          paragraphs: [
            "The mouse does not send its position when you move it. It sends a position on a schedule, whether or not you moved, and each report contains only the change since the last one. A 1000 Hz mouse makes 1000 USB reports every second. A 125 Hz office mouse makes 125. That report rate is the polling rate the polling rate test on this site measures.",
            "Between the device and the browser sit two filters you cannot see from the page. The operating system applies pointer acceleration, which means the same physical movement produces a different number of screen pixels depending on how fast you moved, and it may apply smoothing, which introduces lag. Then the browser applies its own rules about how often it is willing to deliver events to a page and which of them it merges.",
            "The stream a page receives is therefore the product of three things: the device's report rate, the operating system's settings and the browser's internal budget. When a page says the pointer moved 400 pixels, that is the truth about what the page was told. It is not the truth about how far your hand moved.",
          ],
        },
        {
          heading: "Three coordinate systems, and they do not agree",
          paragraphs: [
            "A single movement event reports the same physical movement in three coordinate systems, and they disagree by design.",
            "The unit is the CSS pixel, not the physical pixel. On a display with a device pixel ratio of 2, one CSS pixel is two physical pixels across. A script that measures an element with getBoundingClientRect works in CSS pixels, while a script that compares against a screen capture is working in a different unit and has to divide by the ratio to line up.",
            "The practical consequence is that an event's coordinates describe the document at the moment it was dispatched, and the page may have scrolled since. Code that stores a pageX and later compares it with a fresh getBoundingClientRect result is comparing two different frames.",
          ],
          bullets: [
            "screenX and screenY give the position on the screen, in device pixels, including the browser window's own offset.",
            "clientX and clientY give the position inside the viewport, in CSS pixels. This is the pair most page code uses.",
            "pageX and pageY give the position inside the whole document, so they shift as the page scrolls.",
          ],
        },
        {
          heading: "How often you actually get events",
          paragraphs: [
            "The browser is not obliged to deliver one event per report. If a page is busy laying out at 120 frames per second and the mouse reports at 1000 Hz, most of those reports are irrelevant by the time a frame is painted, so the browser merges them.",
            "getCoalescedEvents on a pointermove returns the list of positions that were folded into it, each with its own timeStamp. It is the closest thing to the raw stream that a web page can see. Chromium and Firefox implement it; Safari does not, and there the page sees only the merged endpoint.",
            "pointerrawupdate is a separate event that fires for individual movement samples before coalescing, which makes it the highest-fidelity signal available to a page. It is delivered for the primary pointer only, and it is not implemented everywhere, so code that depends on it still needs a fallback.",
          ],
          bullets: [
            "One pointermove can represent many physical movements. Ask for getCoalescedEvents to see them separately.",
            "requestAnimationFrame runs after the browser finished a frame. It is the right place to read a position and the wrong place to expect one event per movement.",
            "A background tab receives no movement events at all, so its view of the pointer is stale until an event arrives.",
          ],
        },
        {
          heading: "Acceleration, raw input and the limits of a page",
          paragraphs: [
            "Pointer acceleration exists so that small movements can be precise while large movements stay fast. The trade-off is that the mapping from physical movement to pixels is not fixed, and it is not the same on every machine. A script reading movementX gets the delta the browser decided to apply, which already includes that curve.",
            "The Pointer Lock API is the only way a web page can ask for unaccelerated input. While the pointer is locked, movementX and movementY report the raw delta between consecutive samples. It is also a full-screen takeover that hides the cursor and requires a user gesture, which is why a diagnostic tool cannot simply switch it on.",
            "So a page can tell you how many pixels the pointer travelled and roughly how quickly, but it cannot tell you how far your hand actually moved, what the sensor's native resolution is, or whether the mouse applied smoothing of its own before the operating system ever saw it.",
          ],
        },
        {
          heading: "What this means when you test a mouse",
          paragraphs: [
            "This is why the tools here describe themselves as measuring what your computer received rather than what your mouse is doing. The mouse button test counts the clicks that reached the page. The polling rate test measures the spacing of the movement events the browser delivered. Neither can inspect a switch, an encoder or a sensor.",
            "The gap between those two statements is where most confusing support threads live. A mouse with a failing left switch sends two press events for one physical press, and the browser reports both. A mouse with a worn sensor can report a perfectly regular stream of subtly wrong positions. From inside the page both look like hardware faults, and from inside the driver both look like browser bugs.",
            "Knowing which side of that line you are on saves hours. If the events arriving at the page are wrong, the fault is in the hardware or the driver, and no browser setting will fix it. If the events are right and the application still misbehaves, the fault is in the application.",
          ],
        },
      ],
      faqs: [
        {
          question: "Does the browser know the real position of my cursor?",
          answer: "No. It knows the positions it has been told about, and only at the moments it dispatched an event. Between events it does not track the pointer at all, and a background tab is not told about movement until an event reaches it again.",
        },
        {
          question: "Why does my pointer feel smoother than the event rate suggests?",
          answer: "Because the screen refreshes on its own schedule. Your mouse may report 1000 times a second while the display refreshes 144 times a second. The browser merges movement events that arrive between frames, so the page sees fewer events than the device produced while the display still shows a smooth path.",
        },
        {
          question: "Can a web page read my mouse faster than the mouse reports?",
          answer: "No, and it does not need to. The device is the source of the data, so the report rate is a hard ceiling. A page can ask for the individual samples behind a merged event with getCoalescedEvents, but it cannot invent samples the device never sent.",
        },
        {
          question: "What is pointer acceleration, and can I turn it off for a test?",
          answer: "Pointer acceleration is the operating system's remapping of physical movement into screen pixels, so a fast flick covers more distance than a slow one. Only the Pointer Lock API exposes unaccelerated movement to a page, and it takes over the screen. Everywhere else, the numbers a page reads already include the acceleration curve.",
        },
        {
          question: "Does a browser test prove my mouse is working correctly?",
          answer: "No. It proves what reached the page. A mouse can report a clean, perfectly regular stream of positions while its sensor is worn out, and a browser can deliver events perfectly while the hardware is fine. Use the browser test to rule the software side in or out, then confirm the hardware side with the manufacturer's own diagnostics.",
        },
      ],
      toolSlug: "mouse-test",
    },
    {
      slug: "double-click-chatter-explained",
      title: "Double-click chatter, explained properly",
      metaTitle: "Double-click chatter, explained properly",
      metaDescription:
        "Why a worn mouse switch sends two clicks for one press, how it differs from a real double-click, what the timing signature looks like, and how to fix switch chatter for good.",
      excerpt:
        "Why a worn mouse switch sends two clicks for one press, how it differs from an actual double-click, and what the timing signature looks like.",
      readTime: "6 min read",
      dateLabel: "23 November 2026",
      lead: "When a mouse starts double-clicking on its own, the diagnosis is usually switch chatter: one physical press produces two electrical contacts. It looks exactly like a double-click in software, and that is precisely why it is so often misdiagnosed. The difference is in the timing, and the timing is the whole story.",
      sections: [
        {
          heading: "What a mouse switch actually does",
          paragraphs: [
            "A mouse button is a spring-loaded metal contact that closes a circuit when you press it. In a good switch, the contact closes once, cleanly, and stays closed until you let go.",
            "In a worn switch the contact has become slightly pitted or corroded, or the spring has weakened and no longer presses as firmly. The result is that when you press, the circuit closes, opens again for a fraction of a millisecond as the contact bounces, and closes once more. The mouse's controller sees two presses. You made one.",
            "The gap between the two contacts is typically a few milliseconds and almost always well under fifty. The reason it feels like a double-click is that a great many programs treat a double-click as a signal, and a double-click is two presses close together. The mouse is telling the truth about what it detected; it just detected a press you never made.",
          ],
        },
        {
          heading: "Why the operating system calls it a double-click",
          paragraphs: [
            "Almost every desktop system has a setting for how close together two clicks must be to count as a double-click. On Windows this is double-click speed, 500 milliseconds by default. macOS keeps the equivalent in its trackpad and mouse settings. Anything under that threshold is a double-click as far as the system is concerned, and chatter lands far under it.",
            "So the chatter does not merely look like a double-click, it is a double-click by the system's own definition. The mouse sent two press events 6 milliseconds apart; the system saw two presses inside its threshold and reported a double-click to every application on the machine.",
            "That is also why the fault is so often blamed on Windows, on the browser, or on whichever game happened to be running. The system is doing exactly what it was told to do, and the evidence it used was the mouse's report.",
          ],
        },
        {
          heading: "The timing signature that separates them",
          paragraphs: [
            "A real double-click and a chatter event are distinguishable, because they are made of different things. A real double-click is two complete press-and-release cycles: down, up, down, up. Chatter is one press-and-release cycle with an extra contact inside it: down, up, down, up, where the second down arrives microseconds after the first up and no human finger moved in between.",
            "The gap is the giveaway. In a real double-click the gap between the first release and the second press is the time it takes a human to move a finger and press again, normally somewhere between 80 and 300 milliseconds. In chatter the gap is the bounce time of a metal contact, somewhere between 1 and 30 milliseconds. The two populations do not overlap: one is a person, the other is a spring.",
            "The same signature shows up in click rate. A person clicking as fast as they can manages somewhere around 10 to 12 clicks per second. A chattering switch can produce far more than that, because the hardware is generating events faster than any finger could.",
          ],
          bullets: [
            "A real double-click is two full press-release cycles, usually 80 to 300 milliseconds apart, from a finger that moved.",
            "Chatter is one press-release cycle with an extra contact inside it, usually 1 to 30 milliseconds apart.",
            "Rapid clicking by hand tops out near 10 to 12 clicks per second; chatter can exceed that on its own.",
          ],
        },
        {
          heading: "Why the browser makes it hard to see",
          paragraphs: [
            "The browser faithfully reports what it is told, but the browser also has its own idea of a double-click and it uses the operating system's threshold. A page listening for the dblclick event sees precisely what the system saw, so chatter and a real double-click are indistinguishable through that event. That is the trap: dblclick is the one event that will never tell you which of the two happened.",
            "The pointerdown and pointerup events are a better place to look, because they are delivered per physical contact and each carries a timeStamp with sub-millisecond resolution. A page that timestamps every press itself can measure the gap between two presses that arrived 6 milliseconds apart, and that number is the diagnosis.",
            "There is a subtlety with timestamps. Each event's timeStamp is relative to the time origin of the document, and browsers do not guarantee it is the moment the hardware sampled the movement. It is the moment the event was dispatched. Under load that dispatch time can drift from the physical time, so a page should always compute the gap between two timestamps taken from the same clock rather than comparing a timestamp against Date.now.",
          ],
        },
        {
          heading: "How to read the result",
          paragraphs: [
            "The mouse button test on this site records the timestamp of every press, groups presses that arrive within 50 milliseconds of one another, and reports the gap. A gap of a few milliseconds is chatter. A gap in the double-click range is a double-click, and the double-click counter only increments when the gap falls inside that range.",
            "The 50 millisecond threshold is deliberately generous. Human double-clicks essentially never come closer than about 80 milliseconds and switch bounce essentially never exceeds about 30, so the two populations do not overlap and the boundary can sit comfortably in the empty space between them.",
            "The test also shows the smallest gap seen during the session. That one number usually settles the question without any judgement call: a smallest gap in single-digit milliseconds is chatter, and a smallest gap in the hundreds of milliseconds means your double-clicks are real.",
          ],
        },
        {
          heading: "What to actually do about it",
          paragraphs: [
            "If the chatter is mild, the fix is often cleaning. Compressed air or a soft brush clears dust, and a contact cleaner of the kind sold for cleaning electrical contacts dissolves the oxide that makes a pitted contact bounce. Contacts are cheap to service, and a worn switch can often be brought back this way.",
            "If the switch is mechanically damaged it needs replacing. A mouse with interchangeable switches, which is common among repairable mice, is a five-minute job with a soldering iron. A mouse with a sealed switch is a different matter, and the real question there is whether the mouse is worth repairing at all.",
            "There is a software workaround worth knowing about, because it confuses people. Lowering the operating system's double-click threshold. Set it to its minimum and the system stops treating a 6 millisecond bounce as a double-click. It works, and it is genuinely the wrong fix, because it also makes genuine double-clicks harder to perform. Every application you use, not only the one that misbehaved, now has a tighter double-click window. Treat it as a way to test the diagnosis rather than as a solution.",
          ],
        },
      ],
      faqs: [
        {
          question: "How do I tell switch chatter apart from a real double-click?",
          answer: "By the gap between the two presses. A real double-click is two full press-and-release cycles, usually 80 to 300 milliseconds apart. Chatter is one press with an extra contact inside it, usually 1 to 30 milliseconds apart. The mouse button test measures that gap and reports it.",
        },
        {
          question: "Can a real double-click ever be fast enough to look like chatter?",
          answer: "No. Even the fastest intentional double-click leaves a gap of roughly 80 milliseconds, because a finger has to release and travel before it can press again. Chatter happens in single-digit milliseconds, which is faster than a switch can physically move. The two never overlap.",
        },
        {
          question: "My mouse double-clicks in one program only. Is it still the mouse?",
          answer: "Almost certainly. The program is usually the only one that treats a double-click as a meaningful action, so it is the one that makes the fault visible. Check the mouse in a plain text editor and in the browser: if the chatter shows up there too, it is the hardware and not the program.",
        },
        {
          question: "Does the operating system's double-click speed setting matter?",
          answer: "It decides what counts as a double-click, and that threshold is the reason chatter is reported as one. Lowering the setting makes chatter harder to trigger but also makes genuine double-clicks harder to perform, so it is a way to test the diagnosis rather than a fix.",
        },
        {
          question: "Is a chattering mouse a fire risk or dangerous to keep using?",
          answer: "No. Chatter is an electrical contact bouncing inside a low-voltage circuit carrying a fraction of an amp. It does not damage the mouse and it is not a fire risk. The cost is the misdirected clicking and the lost work, not the hardware itself.",
        },
      ],
      toolSlug: "mouse-test",
    },
  ],
};
