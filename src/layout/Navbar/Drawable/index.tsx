import React from "react";
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    useDisclosure,
    Text,
    Flex,
    Image,
    Box,
} from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineMenuFold } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { useRouter } from "next/router";
import { whatsappNumber } from "@/resources/whatsappNumber";

interface IProps {
    colorTheming?: "ligthPink" | "darkCyan";
}

const Drawable: React.FC<IProps> = ({ colorTheming }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
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
            return "white";
        } else if (rotaAtual === route) {
            return "secondary.900";
        }
    };

    return (
        <>
            <Flex
                justifyContent="space-between"
                bg={
                    colorTheming === "darkCyan"
                        ? "secondary.900"
                        : "primary.100"
                }
                boxShadow="md"
                position="fixed"
                top={-1}
                left={-1}
                right={-5}
                h={90}
                w="101%"
                zIndex={9999}
                alignItems="center"
                px={8}
                display={{ base: "flex", md: "none" }}
            >
                <Box
                    color="black"
                    cursor="pointer"
                    onClick={() => router.push("/home")}
                >
                    <Image
                        w={36}
                        src={
                            colorTheming !== "darkCyan"
                                ? "/img/marca_cabecalho44.png"
                                : "/img/marca_cabecalho.png"
                        }
                        alt="Logo"
                    />
                </Box>
                <Flex gap={3} alignItems="center">
                    <Box
                        color="black"
                        cursor="pointer"
                        onClick={() => router.push("/cart")}
                    >
                        <BsHandbag size={25} />
                    </Box>
                    <Button
                        display={{ base: "block", md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                        bg="transparent"
                        _focus={{ bg: "transparent" }}
                        _hover={{ bg: "transparent" }}
                    >
                        <AiOutlineMenuFold color="black" size={25} />
                    </Button>
                </Flex>
            </Flex>
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent
                    bg={
                        colorTheming === "darkCyan"
                            ? "primary.400"
                            : "secondary.900"
                    }
                >
                    <DrawerCloseButton />
                    <DrawerBody mt={28} gap={5} display="flex" flexDir="column">
                        <Link href="/home">
                            <Text
                                fontWeight={600}
                                fontSize={20}
                                color={switchColor("/home")}
                                cursor="pointer"
                            >
                                Início
                            </Text>
                        </Link>
                        <Text
                            color="white"
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
                            {colorTheming === "darkCyan"
                                ? "Feminino"
                                : "Masculino"}
                        </Text>
                        <Link href="/allProducts">
                            <Text
                                fontWeight={600}
                                fontSize={20}
                                color={switchColor("/allProducts")}
                                cursor="pointer"
                            >
                                Todos os produtos
                            </Text>
                        </Link>
                        <Link href="/tip">
                            <Text
                                fontWeight={600}
                                fontSize={20}
                                color={switchColor("/tip")}
                                cursor="pointer"
                            >
                                Dicas
                            </Text>
                        </Link>
                        <Link href="/about">
                            <Text
                                fontWeight={600}
                                fontSize={20}
                                color={switchColor("/about")}
                                cursor="pointer"
                            >
                                Sobre
                            </Text>
                        </Link>
                        <Text
                            onClick={() => sendMessage()}
                            fontWeight={600}
                            fontSize={20}
                            cursor="pointer"
                        >
                            Contato
                        </Text>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default Drawable;
