import type { LocaleContent } from "../../types";
import { toolUi } from "./labels";
import { cpsTest } from "./cps-test";
import { keyboardTest } from "./keyboard-test";
import { mouseTest } from "./mouse-test";
import { pollingRateTest } from "./polling-rate-test";
import { scrollTest } from "./scroll-test";
import { about, blog, contact, home, privacy, toolsIndex } from "./site";
import { ui } from "./ui";

export const ptBr: LocaleContent = {
  locale: "pt-br",
  ui,
  home,
  toolsIndex,
  about,
  contact,
  blog,
  privacy,
  toolPages: {
    "mouse-test": mouseTest,
    "scroll-test": scrollTest,
    "keyboard-test": keyboardTest,
    "cps-test": cpsTest,
    "polling-rate-test": pollingRateTest,
  },
  toolUi,
};
