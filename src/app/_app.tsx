import { ChakraProvider } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import type { AppProps } from "next/app";

const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,
  body {
    width: 100%;
    height: 100%;
  }
  body {
    padding: 0;
    margin: 0;
    width: 100vw;
    overflow-x: hidden; /* Prevent horizontal scrolling */
  }
  #__next {
    width: 100%;
    height: 100%;
    overflow-x: hidden; /* Prevent horizontal scrolling */
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Global styles={GlobalStyles} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
