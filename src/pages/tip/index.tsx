import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Text, Center, Heading, Flex, Image } from "@chakra-ui/react";
import { useCheckSexSelected } from "@/context";
import MainLayout from "@/layout/MainLayout";
import { tips } from "@/resources/strings/tips";

const Loading: NextPage = () => {
    const router = useRouter();
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
            >
                <Center
                    w="100%"
                    h="40vh"
                    bg={
                        sexSelected === "masculine"
                            ? "url('banner_produtosmasculino.svg')"
                            : "url('banner_produtosfem.svg')"
                    }
                    backgroundSize="cover"
                    backgroundPosition="center"
                    mb={5}
                    flexDirection="column"
                    gap={5}
                >
                    <Heading fontSize={50}>Basium Dicas</Heading>
                    <Text fontSize={20}>Conte com nossas Ajuda!</Text>
                </Center>
                <Flex
                    my={20}
                    flexDir="column"
                    w={{ base: "100%", md: "50%" }}
                    mx="auto"
                    gap={10}
                >
                    {tips.map((tip, index) => (
                        <Flex
                            key={index + tip.title}
                            alignItems="center"
                            gap={7}
                            flexDirection={{ base: "column", md: "row" }}
                            w="100%"
                        >
                            <Image
                                w="50%"
                                minW={300}
                                src={tip.image}
                                alt="tecidos"
                            />
                            <Flex
                                direction="column"
                                gap={5}
                                w={{ base: "90%", md: 400 }}
                            >
                                <Text
                                    color={
                                        sexSelected === "masculine"
                                            ? "white"
                                            : "secondary.900"
                                    }
                                    fontSize={{ base: 20, md: 24 }}
                                    textAlign={{ base: "center", md: "left" }}
                                    fontWeight={600}
                                >
                                    {tip.title}
                                </Text>
                                <Text
                                    textAlign={{ base: "center", md: "left" }}
                                    color={
                                        sexSelected === "masculine"
                                            ? "white"
                                            : "secondary.900"
                                    }
                                    fontSize={{ base: 16, md: 20 }}
                                >
                                    {tip.subTitle}
                                </Text>
                                <Text
                                    onClick={() =>
                                        router.push(`tipDetail/${index}`)
                                    }
                                    cursor="pointer"
                                    _hover={{
                                        opacity: 0.8,
                                    }}
                                    color={
                                        sexSelected === "masculine"
                                            ? "white"
                                            : "secondary.900"
                                    }
                                    textAlign={{ base: "center", md: "left" }}
                                >
                                    Saiba mais...
                                </Text>
                            </Flex>
                        </Flex>
                    ))}
                </Flex>
            </Flex>
        </MainLayout>
    );
};

export default Loading;
