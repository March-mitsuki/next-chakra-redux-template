import { defineStyleConfig, TooltipProps } from "@chakra-ui/react";

const baseStyle: Partial<TooltipProps> = {
  borderRadius: "sm",
  fontWeight: "normal",
  bg: "blackAlpha.900",
  color: "whiteAlpha.900",
};

export const tooltipTheme = defineStyleConfig({ baseStyle });
