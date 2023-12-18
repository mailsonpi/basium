import React from "react";
import { NextPage } from "next";
import { Flex, Center, Button, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCheckSexSelected } from "@/context";

const InitialPage: NextPage = () => {
    const router = useRouter();
    const { updateSexSelected } = useCheckSexSelected();
    const onClick = (isMasculine: boolean) => {
        if (isMasculine) {
            router.push("/loading");
            localStorage.setItem("sex", "masculine");
            return;
        }
        router.push("/loading");
        localStorage.setItem("sex", "feminine");
    };
    React.useEffect(() => {
        updateSexSelected("");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Flex h="100vh" flexDirection="column">
            <Center
                h="50%"
                bg="primary.100"
                flexDirection="column"
                justifyContent="space-around"
            >
                <Heading
                    fontFamily="'Libre Baskerville', serif"
                    color="#745646"
                    fontSize={{ base: 60, md: 80 }}
                    textAlign="center"
                >
                    Qual Gênero?
                </Heading>
                <Button
                    onClick={() => onClick(false)}
                    h="121px"
                    fontSize={{ base: 52, md: 80 }}
                    bg="primary.400"
                    color="#745646"
                    px={6}
                    rounded="2xl"
                    fontFamily="'Libre Baskerville', serif"
                    _hover={{
                        bg: "primary.400",
                        color: "white",
                    }}
                >
                    Feminino
                </Button>
            </Center>
            <Center
                h="50%"
                bg="secondary.900"
                flexDirection="column"
                justifyContent="space-around"
            >
                <Button
                    onClick={() => onClick(true)}
                    h="121px"
                    fontSize={{ base: 52, md: 80 }}
                    bg="primary.400"
                    color="#745646"
                    px={6}
                    rounded="2xl"
                    fontFamily="'Libre Baskerville', serif"
                    _hover={{
                        bg: "primary.400",
                        color: "white",
                    }}
                >
                    Masculino
                </Button>
                <span />
            </Center>
        </Flex>
    );
};

export default InitialPage;
