import {
  type StyleFunctionProps,
  extendTheme,
  type StyleProps,
  type ThemeConfig,
} from "@chakra-ui/react";

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const styles = {
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: props.colorMode === "light" ? "white" : "gray.800",
        color: props.colorMode === "light" ? "black" : "whiteAlpha.900",
      },
    }),
  },
  components: {},
};

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
  ...styles,
  ...breakpoints,
};

const theme = extendTheme(config);

export default theme;
