import { defineStyleConfig, TooltipProps } from "@chakra-ui/react";

const baseStyle: Partial<TooltipProps> = {
  borderRadius: "sm",
  fontWeight: "normal",
  bg: "darkGreyColor.700",
  color: "whiteAlpha.900",
};

export const tooltipTheme = defineStyleConfig({ baseStyle });

