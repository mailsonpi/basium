import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { BsHandbag } from "react-icons/bs";
import { useRouter } from "next/router";
import { whatsappNumber } from "@/resources/whatsappNumber";

interface IProps {
    colorTheming?: "ligthPink" | "darkCyan";
}

const Navbar: React.FC<IProps> = ({ colorTheming }) => {
    const router = useRouter();
    const rotaAtual = router.pathname;
    const sendMessage = () => {
        const message = `Olá, vim pelo site * BASIUM * e gostaria de conversar!`;
        const url = `whatsapp://send?phone=${whatsappNumber}&text=${encodeURIComponent(
            message
        )}`;
        window.location.href = url;
    };

    const switchColor = (route: string) => {
        if (rotaAtual === route) {
            return "primary.500";
        } else if (colorTheming === "darkCyan") {
            return "white";
        }

        if (colorTheming === "ligthPink") {
            return "secondary.900";
        } else if (rotaAtual === route) {
            return "white";
        }
    };

    return (
        <Flex
            position="fixed"
            top={0}
            left={0}
            h="90px"
            w="100%"
            zIndex={1000}
            alignItems="center"
            display={{ base: "none", md: "block" }}
            bg={colorTheming === "darkCyan" ? "secondary.900" : "primary.100"}
            boxShadow="md"
        >
            <Flex
                w="80%"
                justifyContent="space-between"
                alignItems="center"
                mx="auto"
                h="100%"
            >
                <Image
                    src={
                        colorTheming !== "darkCyan"
                            ? "/img/marca_cabecalho44.png"
                            : "/img/marca_cabecalho.png"
                    }
                    alt="Logo"
                    w={32}
                />
                <Flex gap={10} alignItems="center">
                    <Text
                        color={switchColor("/home")}
                        cursor="pointer"
                        _hover={{ color: "primary.500" }}
                        fontWeight={600}
                        onClick={() => router.push("/home")}
                    >
                        Início
                    </Text>
                    <Text
                        color={colorTheming === "darkCyan" ? "white" : "black"}
                        cursor="pointer"
                        _hover={{ color: "primary.500" }}
                        fontWeight={600}
                        onClick={() => {
                            if (colorTheming === "darkCyan") {
                                router.push("/loading");
                                localStorage.setItem("sex", "feminine");
                                return;
                            }
                            router.push("/loading");
                            localStorage.setItem("sex", "masculine");
                        }}
                    >
                        {colorTheming === "darkCyan" ? "Feminino" : "Masculino"}
                    </Text>
                    <Text
                        color={switchColor("/allProducts")}
                        cursor="pointer"
                        _hover={{ color: "primary.500" }}
                        fontWeight={600}
                        onClick={() => router.push("/allProducts")}
                    >
                        Todos os produtos
                    </Text>
                    <Text
                        color={colorTheming === "darkCyan" ? "white" : "black"}
                        cursor="pointer"
                        _hover={{ color: "primary.500" }}
                        fontWeight={600}
                        onClick={() => router.push("/tip")}
                    >
                        Dicas
                    </Text>
                    <Text
                        color={switchColor("/about")}
                        cursor="pointer"
                        _hover={{ color: "primary.500" }}
                        fontWeight={600}
                        onClick={() => router.push("/about")}
                    >
                        Sobre
                    </Text>
                    <Text
                        color={colorTheming === "darkCyan" ? "white" : "black"}
                        cursor="pointer"
                        _hover={{ color: "primary.500" }}
                        fontWeight={600}
                        onClick={() => sendMessage()}
                    >
                        Contato
                    </Text>
                    <Box
                        color={switchColor("/cart")}
                        cursor="pointer"
                        transition=".4s"
                        onClick={() => router.push("/cart")}
                        _hover={{ color: "primary.500" }}
                    >
                        <BsHandbag size={25} />
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Navbar;
