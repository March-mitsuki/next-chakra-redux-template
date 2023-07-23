import { SupportedLanguages, supportedLanguages } from "@/i18n";

type AppLocalStorage = {
  lang: SupportedLanguages;
};
type AppLocalStorageKeys = keyof AppLocalStorage;
type AppLocalStorageValueOf<K extends AppLocalStorageKeys> = AppLocalStorage[K];

// Use to check if the type of `initialValues` is string or not.
// So that we can use `JSON.parse` or not.
const initialValues: Required<AppLocalStorage> = {
  lang: "en",
};

export function setLocalStorageItem<K extends AppLocalStorageKeys>(
  key: K,
  value: AppLocalStorageValueOf<K>
) {
  if (typeof initialValues[key] !== "string") {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, value);
  }
}

export function getLocalStorageItem<K extends AppLocalStorageKeys>(key: K) {
  const str = localStorage.getItem(key);
  if (str && typeof initialValues[key] !== "string") {
    return JSON.parse(str) as AppLocalStorageValueOf<K>;
  }
  return str ? (str as AppLocalStorageValueOf<K>) : undefined;
}

export function removeLocalStorageItem<K extends AppLocalStorageKeys>(key: K) {
  localStorage.removeItem(key);
}

export function initAppLocalStorage() {
  const lang = getLocalStorageItem("lang");

  if (!lang) {
    const bcp47Tag = navigator.language;
    const iso6391Tag = bcp47Tag.slice(0, 2);
    if (supportedLanguages.includes(iso6391Tag as any)) {
      setLocalStorageItem("lang", iso6391Tag as SupportedLanguages);
    } else {
      setLocalStorageItem("lang", "en");
    }
  }
}
