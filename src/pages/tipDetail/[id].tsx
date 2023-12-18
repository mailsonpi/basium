import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import {
    Text,
    Center,
    Heading,
    Flex,
    UnorderedList,
    Image,
    Box,
} from "@chakra-ui/react";
import { useCheckSexSelected } from "@/context";
import MainLayout from "@/layout/MainLayout";
import { IListTips, tips } from "@/resources/strings/tips";

const Loading: NextPage = () => {
    const { sexSelected } = useCheckSexSelected();
    const router = useRouter();
    const { id } = router.query;
    const tipSelected = tips.find((item: IListTips) => item.id === Number(id));

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
                            ? "url('/banner_produtosmasculino.svg')"
                            : "url('/banner_produtosfem.svg')"
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
                    my={{ base: 10, md: 20 }}
                    w={{ base: "100%", md: "70%" }}
                    mx="auto"
                    gap={10}
                >
                    {tipSelected?.details && (
                        <Flex gap={5} flexDir={{ base: "column", md: "row" }}>
                            <Image
                                w={{ base: "90%", md: "50%" }}
                                mx="auto"
                                src={tipSelected.image}
                                alt={tipSelected.details.title}
                            />
                            <Box mx="auto" w={{ base: "90%", md: "unset" }}>
                                <Text
                                    color={
                                        sexSelected === "masculine"
                                            ? "white"
                                            : "secondary.900"
                                    }
                                    fontWeight={600}
                                    fontSize={36}
                                    mb={5}
                                >
                                    {tipSelected.details.title}
                                </Text>
                                <Text
                                    color={
                                        sexSelected === "masculine"
                                            ? "white"
                                            : "secondary.900"
                                    }
                                    fontSize={20}
                                >
                                    {tipSelected.details.description}
                                </Text>
                                <UnorderedList
                                    color={
                                        sexSelected === "masculine"
                                            ? "white"
                                            : "secondary.900"
                                    }
                                    p={0}
                                    m={0}
                                >
                                    {tipSelected.details.listTips.map(
                                        (item, index) => (
                                            <Text
                                                key={index}
                                                my={3}
                                                color={
                                                    sexSelected === "masculine"
                                                        ? "white"
                                                        : "secondary.900"
                                                }
                                            >
                                                {item}
                                            </Text>
                                        )
                                    )}
                                </UnorderedList>
                            </Box>
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </MainLayout>
    );
};

export default Loading;
