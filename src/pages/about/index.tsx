import React from "react";
import { NextPage } from "next";
import { Text, Heading, Flex, Image } from "@chakra-ui/react";
import { useCheckSexSelected } from "@/context";
import MainLayout from "@/layout/MainLayout";

const About: NextPage = () => {
    const { sexSelected } = useCheckSexSelected();

    return (
        <MainLayout
            navbar={{
                hasNavbar: true,
                colorTheming:
                    sexSelected === "masculine" ? "darkCyan" : "ligthPink",
            }}
        >
            <Flex
                w="100%"
                flexDir="column"
                bg={sexSelected === "masculine" ? "secondary.900" : "white"}
                py={10}
            >
                <Heading
                    fontSize={35}
                    my={10}
                    color={
                        sexSelected === "feminine" ? "secondary.900" : "white"
                    }
                    textAlign="center"
                >
                    Sobre Nós
                </Heading>
                <Image
                    src="https://agroplanassessoria.com/SobreN%C3%B3s.png"
                    alt="Basium"
                    w={{ base: "95%", md: 700 }}
                    mx="auto"
                    rounded="md"
                />
                <Flex
                    flexDirection="column"
                    w={{ base: "90%", md: "80%" }}
                    mx="auto"
                >
                    <Text
                        textAlign="center"
                        color={
                            sexSelected === "feminine"
                                ? "secondary.900"
                                : "white"
                        }
                        fontWeight={600}
                        fontSize="2rem"
                        my={4}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                    <Text
                        textAlign="center"
                        color={
                            sexSelected === "feminine"
                                ? "secondary.900"
                                : "white"
                        }
                        fontSize="1.6rem"
                        lineHeight={1.2}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed et magna eu nulla imperdiet consequat non quis orci.
                        Aliquam id lacus sit amet ex auctor blandit sit amet non
                        libero.
                    </Text>
                </Flex>
            </Flex>
        </MainLayout>
    );
};

export default About;
