import React from "react";
import { Flex, Image, ListItem, List, Text, Grid } from "@chakra-ui/react";
import { whatsappNumber } from "@/resources/whatsappNumber";
import { useRouter } from "next/router";
import { useCheckSexSelected } from "@/context";
import Link from "next/link";

const Footer: React.FC = () => {
    const { sexSelected } = useCheckSexSelected();
    const router = useRouter();

    const sendMessage = (message: string) => {
        const url = `whatsapp://send?phone=${whatsappNumber}&text=${encodeURIComponent(
            message
        )}`;
        window.location.href = url;
    };

    return (
        <Flex
            flexDirection="column"
            bg={sexSelected === "masculine" ? "secondary.900" : "#f2eade"}
            px={{ base: 10, xl: "10%" }}
            py={10}
        >
            <Image
                src={
                    sexSelected === "feminine"
                        ? "/img/marca_cabecalho44.png"
                        : "/img/marca_cabecalho.png"
                }
                alt="Logo"
                w={32}
                mb={5}
                mx={{ base: "auto", md: "0" }}
            />
            <Flex
                justifyContent="space-between"
                flexDirection={{ base: "column", lg: "row" }}
            >
                <Flex
                    gap={2}
                    mb={10}
                    justifyContent={{ base: "center", md: "left" }}
                >
                    <Link href={"https://agroplanassessoria.com/"}>
                        <Image
                            w={{ base: 100, md: 150 }}
                            src="/MARCAGIRASSOL.svg"
                            alt="Agroplan"
                        />
                    </Link>
                    <Link href={"https://www.zillasprime.com/"}>
                        <Image
                            w={{ base: 100, md: 150 }}
                            src="/MARCAZILLA.svg"
                            alt="Zilla"
                        />
                    </Link>
                </Flex>
                <Grid
                    gridTemplateColumns={{
                        base: "1fr",
                        lg: "repeat(2,1fr)",
                        xl: "repeat(3,1fr)",
                    }}
                    color="white"
                    listStyleType="none"
                    justifyContent="center"
                    mx="auto"
                >
                    <List
                        mx={{ base: "auto", sm: "none" }}
                        color={
                            sexSelected === "masculine"
                                ? "white"
                                : "secondary.900"
                        }
                    >
                        <ListItem
                            textAlign={{ base: "center", md: "left" }}
                            fontWeight={600}
                            mb={5}
                            cursor="default"
                        >
                            Sobre
                        </ListItem>
                        <Link href={"/about"}>
                            <ListItem
                                textAlign={{ base: "center", md: "left" }}
                                transition=".4s"
                                _hover={{ opacity: 0.4 }}
                                cursor="pointer"
                            >
                                Sobre nós
                            </ListItem>
                        </Link>
                        <ListItem
                            textAlign={{ base: "center", md: "left" }}
                            transition=".4s"
                            _hover={{ opacity: 0.4 }}
                            cursor="pointer"
                        >
                            Informação de entrega
                        </ListItem>
                        <ListItem
                            textAlign={{ base: "center", md: "left" }}
                            transition=".4s"
                            _hover={{ opacity: 0.4 }}
                            cursor="pointer"
                        >
                            Política de privacidade
                        </ListItem>
                        <ListItem
                            textAlign={{ base: "center", md: "left" }}
                            transition=".4s"
                            _hover={{ opacity: 0.4 }}
                            cursor="pointer"
                            onClick={() =>
                                sendMessage("Olá, gostaria de conversar!")
                            }
                        >
                            Contato
                        </ListItem>
                    </List>
                    <List
                        color={
                            sexSelected === "masculine"
                                ? "white"
                                : "secondary.900"
                        }
                        mx={{ base: "auto", sm: "none" }}
                        my={{ base: 10, md: 0 }}
                    >
                        <ListItem
                            textAlign={{ base: "center", md: "left" }}
                            fontWeight={600}
                            mb={5}
                            cursor="default"
                        >
                            Cliente
                        </ListItem>
                        <ListItem
                            textAlign={{ base: "center", md: "left" }}
                            transition=".4s"
                            _hover={{ opacity: 0.4 }}
                            cursor="pointer"
                            onClick={() => router.push("/cart")}
                        >
                            Ver Carrinho
                        </ListItem>
                        <ListItem
                            textAlign={{ base: "center", md: "left" }}
                            transition=".4s"
                            _hover={{ opacity: 0.4 }}
                            cursor="pointer"
                        >
                            Minha lista de Desejos
                        </ListItem>
                        <ListItem
                            textAlign={{ base: "center", md: "left" }}
                            transition=".4s"
                            _hover={{ opacity: 0.4 }}
                            cursor="pointer"
                            onClick={() =>
                                sendMessage(
                                    "Olá, gostaria de receber informações de rastreio do meu pedido!"
                                )
                            }
                        >
                            Acompanhar meu Pedido
                        </ListItem>
                        <ListItem
                            textAlign={{ base: "center", md: "left" }}
                            transition=".4s"
                            _hover={{ opacity: 0.4 }}
                            cursor="pointer"
                        >
                            Ajuda
                        </ListItem>
                    </List>
                    <List
                        mx={{ base: "auto", sm: "none" }}
                        color={
                            sexSelected === "masculine"
                                ? "white"
                                : "secondary.900"
                        }
                    >
                        <ListItem
                            fontWeight={600}
                            mb={5}
                            cursor="default"
                            textAlign={{ base: "center", md: "left" }}
                        >
                            Em breve nosso app
                        </ListItem>
                        <ListItem
                            cursor="default"
                            textAlign={{ base: "center", md: "left" }}
                        >
                            App Store / Google Play
                        </ListItem>
                        <Flex
                            gap={3}
                            mt={5}
                            flexWrap="wrap"
                            mx="auto"
                            justifyContent={{ base: "center", md: "left" }}
                        >
                            <Image
                                rounded="md"
                                src="/img/pay/app.jpg"
                                alt="appstore"
                            />
                            <Image
                                rounded="md"
                                src="/img/pay/play.jpg"
                                alt="googlePlay"
                            />
                        </Flex>
                        <ListItem cursor="default" mt={5}>
                            Informações de pagamentos
                        </ListItem>
                        <ListItem cursor="default" mt={2}>
                            <Image
                                rounded="md"
                                src="/img/pay/pay.png"
                                alt="appstore"
                            />
                        </ListItem>
                    </List>
                </Grid>
            </Flex>
            <Flex flexDir="column">
                <Text
                    fontSize={14}
                    mt={5}
                    as="i"
                    textAlign={{ base: "center", md: "left" }}
                    color={
                        sexSelected === "masculine" ? "white" : "secondary.900"
                    }
                >
                    Rua Cel Teixeira – Alameda Jonas Ferreira Lima (Novo
                    Calçadão), 237, sala P2, em Jacobina – Bahia
                </Text>
                <Text
                    fontSize={14}
                    mt={1}
                    as="i"
                    color={
                        sexSelected === "masculine" ? "white" : "secondary.900"
                    }
                    textAlign={{ base: "center", md: "left" }}
                >
                    (75) 98154-2072
                </Text>
            </Flex>
            <Text
                textAlign={{ base: "center", md: "left" }}
                mt={10}
                color={sexSelected === "masculine" ? "white" : "secondary.900"}
            >
                © Estilo Basium, todos direitos reservados. 2023
            </Text>
        </Flex>
    );
};

export default Footer;
