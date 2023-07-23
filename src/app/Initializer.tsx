"use client";

import { chakraTheme, chakraThemeConfig } from "@/chakra_theme";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

type ThisProps = React.PropsWithChildren;
export default function Initializer({ children }: ThisProps) {
  return (
    <ChakraProvider theme={chakraTheme}>
      <ColorModeScript initialColorMode={chakraThemeConfig.initialColorMode} />
      {children}
    </ChakraProvider>
  );
}
