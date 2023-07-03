"use client";

import React from "react";
import store from "@/redux/store";
import { Provider as ReduxProvider } from "react-redux";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <CacheProvider>
        <ColorModeScript initialColorMode={theme.initialColorMode} />
        <ChakraProvider>{children}</ChakraProvider>
      </CacheProvider>
    </ReduxProvider>
  );
}
