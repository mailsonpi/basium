import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { theme } from "@/themes";
import Fonts from "@/components/GlobalFont";
import { CheckSexSelected } from "@/context";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Head>
                <title>Basium</title>
                <link rel="shortcut icon" href="/loading.logo.svg" />
            </Head>
            <Fonts />
            <CheckSexSelected>
                <Component {...pageProps} />
            </CheckSexSelected>
        </ChakraProvider>
    );
}
