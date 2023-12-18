import React from "react";
import Head from "next/head";

const SiteHead = () => {
    return (
        <Head>
            <title>Basium</title>
            <meta name="description" content="Portfólio" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.svg" />
        </Head>
    );
};

export default SiteHead;
