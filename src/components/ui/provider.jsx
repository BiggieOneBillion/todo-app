"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";
import { GlobalContextProvider } from "../../context/global-context";

export function Provider(props) {
  return (
    <GlobalContextProvider>
      <ChakraProvider value={defaultSystem}>
        <ColorModeProvider {...props} />
      </ChakraProvider>
    </GlobalContextProvider>
  );
}
