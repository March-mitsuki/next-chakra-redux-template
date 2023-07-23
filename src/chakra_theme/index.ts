import { ThemeOverride, extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { tooltipTheme } from "./components/tooltip";

export const chakraThemeConfig: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const chakraThemeGlobalStyles: ThemeOverride["styles"] = {
  global: (props) => ({
    body: {
      bg: mode("", "#121212")(props),
    },
  }),
};

const chakraThemeColors: ThemeOverride["colors"] = {
  dark: "#121212",
};

const overrides: ThemeOverride = {
  styles: chakraThemeGlobalStyles,
  config: chakraThemeConfig,
  colors: chakraThemeColors,
  components: {
    Tooltip: tooltipTheme,
  }
};

export const chakraTheme = extendTheme(overrides);
