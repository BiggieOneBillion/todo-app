"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";
import { GlobalContextProvider } from "../../context/global-context";

export function Provider({children}) {
  return (
    <GlobalContextProvider>
      <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
    </GlobalContextProvider>
  );
}
