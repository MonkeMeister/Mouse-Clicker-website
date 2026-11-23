import type { ToolContent } from "../types";

export const mouseTest: ToolContent = {
  slug: "mouse-test",
  name: "Mouse Button Test",
  h1: "Mouse Button Test",
  metaTitle: "Mouse Button Test — Check Every Button on Your Mouse Online",
  metaDescription:
    "Is your mouse double clicking? Test all five mouse buttons, the scroll wheel and double-click behaviour in your browser. Detects dead buttons, double-click chatter and dropped clicks. Free, instant.",
  category: "Mouse Tools",
  intro: [
    "This mouse button test records every click, wheel event and button press your browser actually receives, then shows you whether the numbers add up. Is your mouse double clicking on its own? This test answers that in about ten seconds — press one button once, and if a single press adds two clicks, the switch is chattering and the panel names the fault along with the exact timing. Press each button on your real mouse inside the test area and watch the counters move in real time. If a button registers nothing, if one click arrives as two, or if presses get dropped under fast clicking, the counters will tell you.",
    "Everything runs locally in your browser using standard mouse events. There is no download, no extension, no account, and nothing about your clicks or your hardware is uploaded anywhere.",
  ],
  steps: [
    {
      title: "Open the test area and move your cursor into it",
      body: "Click anywhere inside the grey panel. The panel captures the mouse so a right-click does not open a context menu and stray clicks do not trigger links elsewhere on the page.",
    },
    {
      title: "Press each button once, on its own",
      body: "Left, right, middle, and then both thumb buttons if your mouse has them. Press each one a few times so you can see the counters separate cleanly. Watch the diagram on the left light up the corresponding zone.",
    },
    {
      title: "Roll the wheel up, then down",
      body: "Scroll the wheel slowly in one direction, then the other. The up and down counters track each direction separately, which is how a wheel that only registers one way becomes obvious.",
    },
    {
      title: "Try a fast double-click to look for chatter",
      body: "Rapidly double-click the same button ten to twenty times. A worn micro-switch will send two separate presses for one physical click, and the test flags that as a double-click fault with the exact timing.",
    },
  ],
  sections: [
    {
      heading: "How to test if your mouse is double clicking",
      paragraphs: [
        "A mouse is double clicking when one physical press produces two separate click events. The fastest way to find out is to press a button once and watch two numbers. The Total counter should rise by exactly one. If it rises by two, the button is sending a press you never made, and the panel raises a \"Double-click chatter detected\" warning that includes the gap between the two presses in milliseconds. That gap is what separates a hardware fault from normal behaviour: switch chatter lands under 40 milliseconds, while a double-click you performed on purpose is 200 milliseconds or more.",
        "The Double counter may tick up as well, because the operating system sees two genuine button-down events and counts them as a double-click. That is exactly why a chattering mouse selects a single file and then immediately starts renaming it, without you touching anything twice.",
        "Run the test in four passes to be certain. Click once and pause. Double-click normally and check that the Double counter rises by exactly one. Then stress the switch by double-clicking the same button fifteen to twenty times as fast as you can — a worn switch trips the chatter detector within seconds. Finally, repeat the test with a second mouse or on a second computer: if the fault follows the mouse, it is hardware, and if it follows the computer, it is a driver or settings problem.",
        "If the two presses are far enough apart that your operating system counted them as a double-click, the mouse is not at fault and the fix is a settings change rather than a repair. Windows: open Mouse Properties and move the double-click speed slider toward its faster end. macOS: adjust \"Double-click speed\" in Mouse settings. Linux: change the double-click interval in your desktop settings. Only presses arriving inside the 40-millisecond window are genuine hardware chatter, and those need cleaning or a switch replacement.",
      ],
      bullets: [
        "Single-click pass — press once, pause for a second, and press again. One physical press must add exactly one to the Total counter",
        "Double-click pass — double-click normally. The Double counter should rise by one and the Total counter by two",
        "Stress pass — double-click the same button 15 to 20 times as fast as you can. Chatter on a worn switch appears immediately, with the exact millisecond gap",
        "Cross-check pass — repeat with a second mouse or on a second computer to separate a hardware fault from a software one",
      ],
    },
    {
      heading: "What each counter means",
      paragraphs: [
        "A mouse reports button state through a small set of numbered buttons. Your browser reports 0 for the left button, 1 for the middle button, 2 for the right button, and 3 and 4 for the two thumb buttons found on most gaming and ergonomic mice. The test separates each of those into its own counter, so a mouse with a broken side button is obvious rather than hidden inside a total.",
        "Total clicks is the sum of every button press. If the total and the individual counters disagree by more than the number of presses you remember making, something is being dropped or duplicated somewhere.",
        "Double clicks is counted from the browser's own double-click recognition, which uses the operating system's timing threshold — usually somewhere between 400 and 500 milliseconds. If your double-click count is lower than the number of double-clicks you performed, your OS double-click speed setting is probably set too slow rather than your mouse being faulty. A chattering switch can also push this counter up, because the operating system counts two real button-down events as a double-click even though you only pressed once.",
      ],
      bullets: [
        "Left Click — primary button, the one you aim with",
        "Right Click — the contextual button; if this stays at zero, the OS may be remapping it",
        "Middle Click — the wheel press, also used to open links in a new tab",
        "Side Button (Forward) and Side Button (Backward) — the thumb buttons",
        "Scroll Up / Scroll Down — wheel events, tracked per direction",
      ],
    },
    {
      heading: "The three faults this test actually catches",
      paragraphs: [
        "Dead button. The simplest failure and the easiest to miss, because people work around it without noticing. If you press the right button ten times and the counter stays at zero while the left button responds instantly, the switch underneath is dead. The wire and the USB port are fine, because the same cable is carrying every other signal.",
        "Double-click chatter. This is the fault that ruins fast clicking in competitive games. A micro-switch is a tiny spring-loaded metal contact. As it wears, the contact develops a rough spot and momentarily bounces — closing, opening, and closing again in a few milliseconds. The mouse then reports two clicks for one physical press. The operating system interprets that as an accidental double-click and fires an action you did not ask for, such as selecting a single file, or firing two shots when you wanted one.",
        "Intermittent failure. Less common but harder to live with, because the button works most of the time. During fast clicking, the contact occasionally fails to close cleanly and the press is dropped entirely. In a game this feels like the mouse randomly failing to register. The test surfaces it by comparing the number of presses the test recorded against the number of clicks you made.",
      ],
    },
    {
      heading: "Is it switch chatter or just a fast double-click?",
      paragraphs: [
        "Not every double-click fault is the mouse's fault. If the test shows two presses separated by less than 40 milliseconds, that is switch chatter — the signal never reached a released state between the two presses, which means the hardware produced them. If the two presses are separated by 200 milliseconds or more and the operating system registered them as a double-click, that is simply a fast double-click and is completely normal.",
        "The distinction matters because the fix is different. Chatter is a hardware problem you solve by cleaning or replacing the switch. A slow double-click threshold is a settings problem you solve in your operating system's mouse control panel. The panel uses that same 40-millisecond threshold, so anything it flags as chatter is the hardware's fault and nothing else.",
      ],
    },
    {
      heading: "How to fix the problems this test finds",
      paragraphs: [
        "For a dead button, start with the simplest cause: a badly seated or bent connector. Reseat the USB plug, try a different port directly on the computer rather than through a hub, and try the mouse on a different machine. If the button is still dead on a second computer, the switch has failed and the mouse needs repair or replacement.",
        "For double-click chatter, the switch can often be rescued. Open the mouse and apply a small amount of contact cleaner or switch lubricant directly to the affected switch, then work the button repeatedly to distribute it. This extends the life of the switch but does not reverse the wear. For a mouse you rely on daily, replacing the switch with a replacement part is a more reliable fix than cleaning it.",
        "For a scroll wheel that only registers one direction or skips notches, the problem is usually the encoder wheel rather than the switch. Power the mouse down, remove the batteries, and clean the encoder with 90% isopropyl alcohol applied to a lint-free cloth, then rotate the wheel through its full range a dozen or more times so the alcohol reaches the contact. Compressed air alone usually just pushes dust further inside.",
        "For intermittent dropped clicks under fast input, check whether the operating system is applying pointer acceleration. On Windows, disable \"Enhance pointer precision\" in Mouse Properties. On macOS, turn off pointer acceleration in Accessibility settings. On Linux, check the libinput acceleration profile. Raw, unaccelerated input removes a source of erratic timing that is easy to mistake for hardware failure.",
      ],
    },
    {
      heading: "What this test cannot tell you",
      paragraphs: [
        "This is a browser test, so it observes the events the browser receives, not the electrical state of the switch. It cannot measure switch actuation latency, read the sensor's raw DPI, or tell you whether a polling rate is genuinely 1000 Hz. It also cannot distinguish a worn sensor from a worn switch when both produce the same symptom.",
        "It can, however, tell you the thing that matters most in practice: whether the mouse and the computer agree with each other. When a physical press produces exactly one event, every time, that is the contract the rest of your software depends on.",
      ],
    },
  ],
  faqs: [
    {
      question: "How do I test my mouse buttons online?",
      answer:
        "Move your cursor into the test area and press each button in turn — left, right, middle, and both thumb buttons if you have them. Each press increments its own counter and lights up the matching zone on the mouse diagram. Then roll the wheel up and down to check both scroll directions separately.",
    },
    {
      question: "Which mouse buttons can this tester check?",
      answer:
        "All five standard buttons: left, right, middle, and the forward and backward thumb buttons found on most gaming and ergonomic mice. Buttons beyond those five are reported by the browser as unidentified presses, so they still register in the total even though they cannot be attributed to a specific zone.",
    },
    {
      question: "Do I need to install anything to run a mouse button test?",
      answer:
        "No. The test uses standard browser mouse events and runs entirely on the page you are looking at. There is no download, no plugin, no browser extension and no account to create.",
    },
    {
      question: "How do I test if my mouse is double clicking?",
      answer:
        "Click once inside the test area and watch the Total counter. If one physical press adds two clicks, the switch is chattering and the panel reports \"Double-click chatter detected\" together with the exact gap between the two presses. Press the same button ten to twenty times in quick succession to make a worn switch reveal itself — a healthy switch never produces two presses inside 40 milliseconds.",
    },
    {
      question: "Does my mouse double click on its own? What causes that?",
      answer:
        "It means the switch under the button is bouncing: the metal contact closes, opens and closes again within a few milliseconds, so the mouse reports two presses for one physical click. The usual causes are worn micro-switches, dust or debris inside the mouse, and damage from repeated heavy clicking. If the two presses are more than 200 milliseconds apart, that is not chatter — it is your operating system's double-click speed setting, which you can raise in Mouse Properties.",
    },
    {
      question: "What does a double-click fault mean?",
      answer:
        "It means the mouse is reporting two separate presses for one physical click. This is usually worn micro-switch contact chatter, where the metal contact bounces for a few milliseconds before settling. The operating system then treats it as an accidental double-click, which is why the fault is most annoying in fast-paced games.",
    },
    {
      question: "My right-click counter stays at zero. Is my mouse broken?",
      answer:
        "Not necessarily. Some operating systems and applications remap the right button, and a middle-click that opens a link in a new tab can make the browser suppress the context menu inside the test area. Try the mouse on a second computer, and check your mouse button configuration in the operating system settings, before assuming the hardware has failed.",
    },
    {
      question: "Will the test record anything about my personal information?",
      answer:
        "No. Clicks are counted in the page's own memory while the tab is open and are discarded the moment you close or reload it. Nothing is transmitted to a server and no profile is created.",
    },
    {
      question: "Does the test work with a wired mouse and a wireless mouse?",
      answer:
        "Yes. The browser receives the same events either way, so the test behaves identically for wired, Bluetooth, and 2.4 GHz wireless receivers. Wireless mice are worth testing more often though, because a failing battery can produce dropped and delayed events that look identical to hardware faults.",
    },
    {
      question: "Can this test measure mouse DPI or latency?",
      answer:
        "No. DPI comes from the optical sensor and latency from the switch and the polling loop, and neither is exposed to the browser. The polling rate test measures how often the browser receives pointer updates, which is a related but different number.",
    },
    {
      question: "My mouse clicks fine but the test shows dropped clicks. What should I check?",
      answer:
        "Three things, in order. First, pointer acceleration in your operating system, which can introduce erratic timing — disable \"Enhance pointer precision\" on Windows. Second, a low battery or a weak wireless connection. Third, debris on the sensor or a worn switch. If clicks are dropped only while you move the mouse at the same time, the problem is more likely the sensor or the connection than the switch.",
    },
  ],
  related: ["scroll-test", "cps-test", "keyboard-test", "polling-rate-test"],
};
