import React from "react";
import {
    Center,
    Flex,
    Grid,
    Heading,
    Image,
    Text,
    Button,
} from "@chakra-ui/react";
import CardProduct from "../CardProduct";
import { useRouter } from "next/router";
import { useCheckSexSelected } from "@/context";
import { destaquesM } from "@/resources/products/masculino/destaquesM";
import { destaquesF } from "@/resources/products/feminino/destaquesF";

const ProductList: React.FC = () => {
    const navigator = useRouter();
    const { sexSelected } = useCheckSexSelected();

    const typeOfProducts =
        sexSelected === "masculine" ? destaquesM : destaquesF;

    return (
        <Flex justifyContent="space-around" my={10} direction="column">
            <Heading
                textAlign="center"
                color={sexSelected === "masculine" ? "white" : "secondary.900"}
            >
                Produtos em Destaque
            </Heading>
            <Text
                mt={5}
                textAlign="center"
                color={sexSelected === "masculine" ? "white" : "secondary.900"}
            >
                Coleção premium
            </Text>
            <Grid
                w="85%"
                mx="auto"
                gridTemplateColumns={{
                    base: "1fr",
                    sm: "repeat(2,1fr)",
                    md: "repeat(3,1fr)",
                    lg: "repeat(4,1fr)",
                }}
                gap={10}
                mt={14}
            >
                {typeOfProducts.map((item, key) => (
                    <CardProduct
                        onClick={() =>
                            navigator.push(`productDetails/${item.id}`)
                        }
                        product={item}
                        key={key}
                    />
                ))}
            </Grid>
            <Flex
                gap={{ base: 5, md: 14 }}
                mt={16}
                justifyContent="center"
                flexWrap="wrap"
                px={5}
            >
                <Image
                    minW={325}
                    maxW={400}
                    h={288}
                    objectFit="cover"
                    src="/imagem_loja2.png"
                    alt="Image Loja"
                />
                <Image
                    minW={325}
                    maxW={400}
                    h={288}
                    objectFit="cover"
                    src="/imagem_fundadores.png"
                    alt="Image Loja"
                />
                <Image
                    minW={325}
                    maxW={400}
                    h={288}
                    objectFit="cover"
                    src="/imagem_loja.png"
                    alt="Image Loja"
                />
            </Flex>
            <Center
                mt={16}
                bg={
                    sexSelected === "masculine"
                        ? "url('banner_indexmasc.svg')"
                        : "url('banner_index.svg')"
                }
                h="40vh"
                flexDirection="column"
                bgRepeat="no-repeat"
                bgPosition="center"
                bgSize="cover"
            >
                <Text color="secondary.900" fontWeight={600}>
                    Acessórios exclusivos
                </Text>
                <Heading>MONTE SEU ESTILO</Heading>
                <Button
                    mt={5}
                    p={3}
                    bg="secondary.900"
                    color="white"
                    _hover={{ bg: "secondary.800", color: "primary.400" }}
                >
                    Crie agora
                </Button>
            </Center>
        </Flex>
    );
};

export default ProductList;
