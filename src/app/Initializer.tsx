"use client";

import { chakraTheme, chakraThemeConfig } from "@/chakra_theme";
import { i18nActions } from "@/redux/slices/i18n";
import store from "@/redux/store";
import {
  getLocalStorageItem,
  initAppLocalStorage,
} from "@/utils/typedLocalStorage";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { useEffect } from "react";
import { Provider as ReduxProvider } from "react-redux";

type ThisProps = React.PropsWithChildren;
export default function Initializer({ children }: ThisProps) {
  useEffect(() => {
    initAppLocalStorage();

    // Set language
    const lang = getLocalStorageItem("lang");
    if (lang) {
      store.dispatch(i18nActions.changeLang(lang));
    }
  }, []);

  return (
    <ReduxProvider store={store}>
      <ChakraProvider theme={chakraTheme}>
        <ColorModeScript
          initialColorMode={chakraThemeConfig.initialColorMode}
        />
        {children}
      </ChakraProvider>
    </ReduxProvider>
  );
}
