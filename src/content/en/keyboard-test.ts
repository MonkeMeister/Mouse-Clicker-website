import type { ToolContent } from "../types";

export const keyboardTest: ToolContent = {
  slug: "keyboard-test",
  name: "Keyboard Test",
  h1: "Keyboard Test",
  metaTitle: "Keyboard Test Online — Check Every Key and Find Ghosting",
  metaDescription:
    "Test every key on your keyboard in the browser. Identifies unresponsive keys, stuck keys and rollover ghosting, and shows the live key code for anything you press. Free, no install.",
  category: "Keyboard Tools",
  intro: [
    "The keyboard test listens to your keyboard as you type and reports every key the browser receives, along with its physical key code. Press keys one at a time to verify each one, then hold combinations to check for rollover ghosting, which is the hardware limit that makes fast key presses in games drop inputs.",
    "Nothing you type is recorded or transmitted. Keys are matched against a live layout map inside the page and then discarded.",
  ],
  steps: [
    {
      title: "Click the key panel to give it focus",
      body: "The panel needs focus before it can receive key events. Click it once, then start typing. Your browser will not intercept ordinary typing while the panel is focused, so be careful not to type into a form by accident.",
    },
    {
      title: "Press keys one at a time",
      body: "Work across the keyboard physically, not alphabetically. Press each key, confirm the panel lights up, and note any key that stays dark — that is the key that is not working.",
    },
    {
      title: "Check for stuck keys",
      body: "Press a key and release it. If the panel keeps showing it as held down after you let go, the key is mechanically stuck or the keyboard is not registering the release.",
    },
    {
      title: "Test rollover with combinations",
      body: "Hold three or four keys at once and watch for a fourth key lighting up when it should not. That extra key is a ghost, and it tells you exactly how many simultaneous presses your keyboard can handle.",
    },
  ],
  sections: [
    {
      heading: "What key codes mean and why they matter",
      paragraphs: [
        "Every key event carries two identifiers. The key value is what the key produces according to the active layout, so on a French AZERTY keyboard pressing the key labelled Q produces a. The code is the physical position of that key on the keyboard, regardless of layout, so the same physical key always reports the same code.",
        "For testing, the code is the one that matters. It is stable across layouts, which means a key that is broken reports the same failure on every language, and it lets the tool draw an accurate diagram of the keyboard layout you are actually using.",
        "The repeat flag is also worth knowing about. Holding a key down produces one keydown followed by a stream of keydown events marked as repeats, then a single keyup. A key that never sends keyup is what the test calls a stuck key, and it will keep a letter repeating in whatever application you are using.",
      ],
    },
    {
      heading: "Rollover and ghosting, explained properly",
      paragraphs: [
        "Every keyboard has a hardware matrix: a grid of rows and columns wired together, with a switch at each intersection. When you press a key, it connects one row to one column. The controller can only detect the rows and columns that are connected, and it has a limited number of connections it can read at once.",
        "A full-size mechanical keyboard with a proper controller typically handles six or more simultaneous keys, often more. A cheaper keyboard, a laptop keyboard, or a membrane keyboard may only handle three. Press a fourth key and the controller reads a second, unintended row-column pair as connected — producing a ghost key that you never pressed.",
        "The test shows this directly: hold the keys you would use in a fast game movement combination and see which extra key appears. If a ghost appears at three keys, that is your keyboard's effective rollover limit and no software setting will raise it.",
      ],
    },
    {
      heading: "Common keyboard faults and what causes them",
      paragraphs: [
        "A single unresponsive key is nearly always a failed switch. Key switches are rated by life in millions of actuations, and a key that gets heavy use — often a key you rest a finger on during a game — wears out long before the rest of the board. If the key produces no event at all, and does so consistently across reboots, the switch has failed. Replacement switches cost very little and most laptop keyboards are serviceable if you are comfortable opening them.",
        "A key that fires twice for one press is chatter, the keyboard equivalent of mouse switch bounce. It is caused by the same wear mechanism and produces accidental repeats in games.",
        "A key that sticks down but sends its release event is usually debris: a crumb, a drink, or dust compressed in the mechanism. Repeating the key a few times, and then cleaning under the keycap, often restores it without any disassembly.",
        "Chatter that affects many keys at once, especially across a whole row or a whole column, points to a controller or firmware issue rather than individual switches. That usually means a driver update, a reset, or replacement of the whole board.",
      ],
    },
    {
      heading: "Things worth checking before you blame the hardware",
      paragraphs: [
        "Sticky keys and filter keys are accessibility features that are enabled by default on Windows and can be switched on accidentally by pressing the Shift key five times. When sticky keys is active, a single key press behaves as if you held it, and the key appears to repeat. Turning it off in the keyboard settings resolves it instantly.",
        "On macOS, slow keys and key repeat settings can make keys feel unresponsive if the delay is set long. Both are adjustable under Keyboard settings.",
        "Application-level remapping is another common cause. Software such as mouse and keyboard remapping utilities, stream overlays, and some accessibility tools intercept keys before the application sees them. If a key works everywhere else but fails inside one particular program, the program is the problem.",
      ],
    },
  ],
  faqs: [
    {
      question: "How do I test every key on my keyboard?",
      answer:
        "Click the key panel so it has focus, then press keys physically across the board. Each press lights up the matching key on the diagram and shows its key code. Work across the layout rather than alphabetically so you are less likely to skip a key.",
    },
    {
      question: "What is keyboard ghosting and how do I test for it?",
      answer:
        "Ghosting is when the keyboard reports a key you did not press, because its hardware matrix cannot read all the keys you are holding at once. Hold three or four keys together in the test panel and any extra key that lights up is a ghost.",
    },
    {
      question: "What is a good rollover number for gaming?",
      answer:
        "Six or more simultaneous keys is comfortable for most competitive games, and full-size mechanical boards with a good controller often manage more. Three is the bare minimum and is where ghosting starts to appear in fast combinations.",
    },
    {
      question: "Why is one of my keys not working?",
      answer:
        "If the key produces no event at all, the switch has most likely failed — individual switches wear out, and the heavily used ones wear first. If the key is physically stuck or sends a keyup without a keydown, debris under the cap is the usual cause.",
    },
    {
      question: "Does the keyboard test work with laptops?",
      answer:
        "Yes, but laptop keyboards usually have a lower rollover limit than desktop mechanical boards, so they are more likely to show ghosting. Several laptop keys are also duplicated or disabled by the manufacturer, which can look like a fault when it is not one.",
    },
    {
      question: "Is my keystrokes data stored anywhere?",
      answer:
        "No. Keys are matched against the on-page layout as they arrive and are discarded immediately. The page never sends what you type to a server and nothing is retained when you close the tab.",
    },
    {
      question: "What is the difference between key code and key value?",
      answer:
        "The key code identifies the physical position of the key and does not change with the layout. The key value is the character the key produces, so on AZERTY the key labelled Q produces a. The test displays both, and uses the code to work out which physical key you pressed.",
    },
    {
      question: "My keys repeat when I hold them down. Is that normal?",
      answer:
        "Yes, that is normal key repeat, and the test marks those extra events as repeats rather than new presses. If a key keeps repeating after you have released it, that is a stuck key and worth investigating — it is usually debris or a failed switch.",
    },
  ],
  related: ["mouse-test", "cps-test", "scroll-test", "polling-rate-test"],
};
