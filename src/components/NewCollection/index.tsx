import React from "react";
import { Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import CardProduct from "../CardProduct";
import { useRouter } from "next/router";
import { useCheckSexSelected } from "@/context";
import { novaColecaoM } from "@/resources/products/masculino/novaColecao";
import { novaColecaoF } from "@/resources/products/feminino/novaColecaoF";

const NewCollection: React.FC = () => {
    const { sexSelected } = useCheckSexSelected();
    const navigator = useRouter();

    const typeOfProducts =
        sexSelected === "masculine" ? novaColecaoM : novaColecaoF;
    return (
        <Flex justifyContent="space-around" my={10} direction="column">
            <Heading
                textAlign="center"
                color={sexSelected === "masculine" ? "white" : "secondary.900"}
            >
                Nova Coleção
            </Heading>
            <Text
                mt={5}
                textAlign="center"
                color={sexSelected === "masculine" ? "white" : "secondary.900"}
            >
                Modal Casual
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
                {typeOfProducts.map((item, key) => {
                    return (
                        key < 4 && (
                            <CardProduct
                                onClick={() =>
                                    navigator.push(`productDetails/${item.id}`)
                                }
                                product={item}
                                key={key}
                            />
                        )
                    );
                })}
            </Grid>
            <Button
                onClick={() => navigator.push("/allProducts")}
                w="max-content"
                mt={10}
                mx="auto"
                fontSize={14}
                bg="primary.400"
                color="primary.700"
                fontFamily={"'Libre Baskerville', serif"}
            >
                VEJA TODOS OS PRODUTOS
            </Button>
        </Flex>
    );
};

export default NewCollection;
