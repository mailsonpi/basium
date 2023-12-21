import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useCheckSexSelected } from "@/context";
import { useRouter } from "next/router";
import { category } from "@/resources/products/categorias";

const Categories: React.FC = () => {
    const { sexSelected } = useCheckSexSelected();
    const router = useRouter();

    const onGoToFilteredProducts = (filter: category) => {
        localStorage.setItem("category", filter);
        router.push("filteredProducts");
    };

    return (
        <Flex
            justifyContent="center"
            my={10}
            gap={{ base: 0, md: 5 }}
            direction="column"
        >
            <Flex justifyContent="center" gap={5} w="100%" flexWrap="wrap">
                <Flex
                    w="40%"
                    h={{ base: 200, md: 330 }}
                    minW={325}
                    mb={5}
                    bg={
                        sexSelected === "masculine"
                            ? "url('/imgCategory/imagem_modacorp_m.png')"
                            : "url('/imgCategory/imagem_modacorp_f.png')"
                    }
                    direction="column"
                    justifyContent="center"
                    bgSize="cover"
                    bgPosition="center"
                    mx="auto"
                    p={5}
                >
                    <Text fontWeight={600} fontSize={{ base: 32, md: 38 }}>
                        Moda corporativa
                    </Text>
                    <Text
                        fontSize={{ base: 16, md: 20 }}
                        mb={1}
                        fontWeight={600}
                    >
                        Mais elegância no seu trabalho
                    </Text>
                    <Box
                        bg="secondary.800"
                        p={{ base: 2, md: 3 }}
                        cursor="pointer"
                        _hover={{
                            bg: "secondary.500",
                        }}
                        transition=".4s"
                        border="1px solid white"
                        w="max-content"
                        onClick={() =>
                            onGoToFilteredProducts("Moda Corporativa")
                        }
                    >
                        <Text cursor="pointer" fontWeight={600}>
                            Explorar
                        </Text>
                    </Box>
                </Flex>
                <Flex
                    w="40%"
                    h={{ base: 200, md: 330 }}
                    minW={325}
                    mb={5}
                    bg={
                        sexSelected === "masculine"
                            ? "url('/imgCategory/imagem_modacasual_m.png')"
                            : "url('/imgCategory/imagem_modacasual_f.png')"
                    }
                    direction="column"
                    justifyContent="center"
                    bgSize="cover"
                    bgPosition="center"
                    mx="auto"
                    p={5}
                >
                    <Text fontWeight={600} fontSize={{ base: 32, md: 42 }}>
                        Moda Casual
                    </Text>
                    <Text
                        fontSize={{ base: 16, md: 20 }}
                        mb={1}
                        fontWeight={600}
                    >
                        Estilo e casualidade
                    </Text>
                    <Box
                        bg="secondary.800"
                        p={{ base: 2, md: 3 }}
                        cursor="pointer"
                        _hover={{
                            bg: "secondary.500",
                        }}
                        transition=".4s"
                        border="1px solid white"
                        w="max-content"
                        onClick={() => onGoToFilteredProducts("Moda Casual")}
                    >
                        <Text cursor="pointer" fontWeight={600}>
                            Explorar
                        </Text>
                    </Box>
                </Flex>
            </Flex>
            <Flex justifyContent="center" gap={10} w="100%" flexWrap="wrap">
                <Flex
                    w="40%"
                    h={{ base: 200, md: 330 }}
                    minW={325}
                    mb={5}
                    bg={
                        sexSelected === "masculine"
                            ? "url('/imgCategory/imagem_acessorios_m.png')"
                            : "url('/imgCategory/imagem_acessorios_f.png')"
                    }
                    direction="column"
                    justifyContent="center"
                    bgSize="cover"
                    bgPosition="center"
                    mx="auto"
                    p={5}
                >
                    <Text fontWeight={600} fontSize={{ base: 32, md: 42 }}>
                        Acessórios
                    </Text>
                    <Text
                        fontSize={{ base: 16, md: 20 }}
                        mb={1}
                        fontWeight={600}
                    >
                        Carteira, cintas e bolsas
                    </Text>
                    <Box
                        bg="secondary.800"
                        p={{ base: 2, md: 3 }}
                        cursor="pointer"
                        _hover={{
                            bg: "secondary.500",
                        }}
                        transition=".4s"
                        border="1px solid white"
                        w="max-content"
                        onClick={() => onGoToFilteredProducts("Acessórios")}
                    >
                        <Text cursor="pointer" fontWeight={600}>
                            Explorar
                        </Text>
                    </Box>
                </Flex>
                <Flex
                    w="40%"
                    h={{ base: 200, md: 330 }}
                    minW={325}
                    mb={5}
                    bg="url('/imgCategory/imagem_livros.png')"
                    direction="column"
                    justifyContent="center"
                    bgSize="cover"
                    bgPosition="center"
                    mx="auto"
                    p={5}
                >
                    <Text fontWeight={600} fontSize={{ base: 32, md: 38 }}>
                        Dicas
                    </Text>
                    <Text
                        fontSize={{ base: 16, md: 20 }}
                        mb={1}
                        fontWeight={600}
                    >
                        Amplie sua visão do mundo, com mais conhecimentos
                    </Text>
                    <Box
                        bg="secondary.800"
                        p={{ base: 2, md: 3 }}
                        cursor="pointer"
                        _hover={{
                            bg: "secondary.500",
                        }}
                        transition=".4s"
                        border="1px solid white"
                        w="max-content"
                        onClick={() => onGoToFilteredProducts("Livros")}
                    >
                        <Text cursor="pointer" fontWeight={600}>
                            Explorar
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Categories;
