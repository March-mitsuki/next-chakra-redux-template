import { counterTrans } from "./translations/counter";
import { homeTrans } from "./translations/home";

export const supportedLanguages = ["en", "zh", "ja"] as const;

export type SupportedLanguages = (typeof supportedLanguages)[number];

export type Translation = {
  [key in SupportedLanguages]: string;
};

export const mapLangToName = (lang: string) => {
  switch (lang) {
    case "en":
      return "English";
    case "zh":
      return "简体中文";
    case "ja":
      return "日本語";
    default:
      return "English";
  }
};

const trans = {
  ...counterTrans,
  ...homeTrans,
};

export type TransKeys = keyof typeof trans;

export const getTrans = (key: TransKeys, lang: SupportedLanguages) => {
  if (Object.hasOwn(trans, key) === false) {
    return key;
  }

  if (Object.hasOwn(trans[key], lang) === false) {
    return key;
  }

  return trans[key][lang];
};
