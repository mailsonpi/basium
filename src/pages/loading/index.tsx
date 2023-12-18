import React, { useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Text, Center, Image, keyframes } from "@chakra-ui/react";
import { useCheckSexSelected } from "@/context";

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loading: NextPage = () => {
    const router = useRouter();
    const { updateSexSelected } = useCheckSexSelected();
    useEffect(() => {
        const sexLocalStorage = localStorage.getItem("sex");
        updateSexSelected(sexLocalStorage as string);
        const redirectTimer = setTimeout(() => {
            router.push("/home");
        }, 2000);

        return () => clearTimeout(redirectTimer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Center
            flexDirection="column"
            height="100vh"
            bg="secondary.900"
            bgSize="100% 100%"
            bgRepeat="no-repeat"
            bgPosition="center"
            gap={10}
        >
            <Image src={"/img/marca_cabecalho.png"} alt="Logo" w={300} />
            <Image
                src="/loading.logo.svg"
                alt="logo"
                w={70}
                animation={`${rotateAnimation} 2s linear infinite`}
            />
            <Text
                fontSize={32}
                textAlign="center"
                fontFamily="'Libre Baskerville', serif"
                color="primary.200"
            >
                Aguarde...
            </Text>
            <Text
                color="primary.200"
                fontSize={28}
                textAlign="center"
                fontFamily="'Libre Baskerville', serif"
            >
                A Página está carregando...
            </Text>
        </Center>
    );
};

export default Loading;
