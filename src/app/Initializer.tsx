"use client";

import { chakraTheme, chakraThemeConfig } from "@/chakra_theme";
import store from "@/redux/store";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Provider as ReduxProvider } from "react-redux";

type ThisProps = React.PropsWithChildren;
export default function Initializer({ children }: ThisProps) {
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
