/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Flex, Heading, Center, Text, Grid } from "@chakra-ui/react";
import MainLayout from "@/layout/MainLayout";
import { IPart } from "@/resources/products/masculino/camisas";
import CardProduct from "@/components/CardProduct";
import Pagination from "@/components/Pagination";
import { useCheckSexSelected } from "@/context";
import { masculineProducts } from "@/resources/products/masculino";
import { feminineProducts } from "@/resources/products/feminino";
import { category } from "@/resources/products/categorias";

const AllProducts: NextPage = () => {
    const { sexSelected } = useCheckSexSelected();
    const [allProduct, setAllProduct] = React.useState<IPart[]>([]);
    const [page, setPage] = React.useState(1);
    const itemPerPage = 8;
    const [search, setSearch] = React.useState<category | null>(null);
    const ref = useRef<HTMLImageElement | null>(null);
    const router = useRouter();

    const typeOfProducts =
        typeof window !== "undefined" &&
        window.localStorage.getItem("sex") === "masculine"
            ? masculineProducts
            : feminineProducts;

    React.useEffect(() => {
        const items: IPart[] = [];
        typeOfProducts.map((item) => items.push(...(item as IPart[])));
        setAllProduct(items.sort(() => Math.random() - 0.5));
    }, []);

    const indexLast = page * itemPerPage;
    const indexFirst = indexLast - itemPerPage;
    let productsList = allProduct.sort().slice(indexFirst, indexLast);
    const renderItem = () => {
        if (search) {
            const filtered = allProduct.filter((item) =>
                item.category.includes(search)
            );
            productsList = filtered;
            return productsList;
        }
        return productsList.sort();
    };
    const nextPage = () => {
        if (productsList.length >= itemPerPage) {
            setPage(page + 1);
            if (ref.current) {
                ref.current.scrollIntoView({ behavior: "smooth" });
            }
        }
    };
    const prevPage = () => {
        if (page > 1) {
            setPage(page - 1);
            if (ref.current) {
                ref.current.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <MainLayout
            navbar={{
                colorTheming:
                    sexSelected === "masculine" ? "darkCyan" : "ligthPink",
                hasNavbar: true,
            }}
        >
            <Flex
                bgColor={
                    sexSelected === "masculine" ? "secondary.900" : "white"
                }
                bgPosition="cover"
                flexDirection="column"
            >
                <Center
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
                    <Heading
                        fontSize={50}
                        textAlign={{ base: "center", md: "left" }}
                    >
                        Nossos Produtos
                    </Heading>
                    <Text
                        fontSize={20}
                        textAlign={{ base: "center", md: "left" }}
                    >
                        Use cupons e ganhe até 70% off!
                    </Text>
                </Center>
                <Flex
                    flexDir={{ base: "column", md: "row" }}
                    justifyContent="center"
                    mx="5%"
                    pt={4}
                >
                    <Flex
                        direction="column"
                        gap={3}
                        borderRight={{ base: "none", md: "1px solid #FFFFFF" }}
                        borderBottom={{ base: "1px solid", md: "none" }}
                        borderColor="#FFFFFF"
                        px={10}
                        py={5}
                    >
                        <Text
                            color={
                                sexSelected === "masculine"
                                    ? "white"
                                    : "secondary.800"
                            }
                            fontWeight="bold"
                            onClick={() => setSearch("Blazer")}
                            transition=".2s"
                            cursor="pointer"
                            textAlign="center"
                            _hover={{
                                opacity: 0.6,
                            }}
                        >
                            Blazer
                        </Text>
                        <Text
                            color={
                                sexSelected === "masculine"
                                    ? "white"
                                    : "secondary.800"
                            }
                            fontWeight="bold"
                            onClick={() => setSearch("Trajes")}
                            transition=".2s"
                            cursor="pointer"
                            textAlign="center"
                            _hover={{
                                opacity: 0.6,
                            }}
                        >
                            Trajes
                        </Text>
                    </Flex>
                    <Flex
                        direction="column"
                        gap={3}
                        borderRight={{ base: "none", md: "1px solid #FFFFFF" }}
                        borderBottom={{ base: "1px solid", md: "none" }}
                        borderColor="#FFFFFF"
                        px={10}
                        py={5}
                    >
                        <Text
                            color={
                                sexSelected === "masculine"
                                    ? "white"
                                    : "secondary.800"
                            }
                            fontWeight="bold"
                            onClick={() => setSearch("Blusas Sociais")}
                            transition=".2s"
                            cursor="pointer"
                            textAlign="center"
                            _hover={{
                                opacity: 0.6,
                            }}
                        >
                            Camisas Sociais
                        </Text>
                        <Text
                            color={
                                sexSelected === "masculine"
                                    ? "white"
                                    : "secondary.800"
                            }
                            fontWeight="bold"
                            onClick={() => setSearch("Camisa Polo")}
                            transition=".2s"
                            cursor="pointer"
                            textAlign="center"
                            _hover={{
                                opacity: 0.6,
                            }}
                        >
                            Camisas Polo
                        </Text>
                        <Text
                            color={
                                sexSelected === "masculine"
                                    ? "white"
                                    : "secondary.800"
                            }
                            fontWeight="bold"
                            onClick={() => setSearch("T-Shirts")}
                            transition=".2s"
                            cursor="pointer"
                            textAlign="center"
                            _hover={{
                                opacity: 0.6,
                            }}
                        >
                            T-Shirts
                        </Text>
                    </Flex>
                    <Flex
                        direction="column"
                        gap={3}
                        borderRight={{ base: "none", md: "1px solid #FFFFFF" }}
                        borderBottom={{ base: "1px solid", md: "none" }}
                        borderColor="#FFFFFF"
                        px={10}
                        py={5}
                    >
                        <Text
                            color={
                                sexSelected === "masculine"
                                    ? "white"
                                    : "secondary.800"
                            }
                            fontWeight="bold"
                            onClick={() => setSearch("Calças Jeans")}
                            transition=".2s"
                            cursor="pointer"
                            textAlign="center"
                            _hover={{
                                opacity: 0.6,
                            }}
                        >
                            Calças Jeans
                        </Text>
                        <Text
                            color={
                                sexSelected === "masculine"
                                    ? "white"
                                    : "secondary.800"
                            }
                            fontWeight="bold"
                            onClick={() => setSearch("Calças Alfaiataria")}
                            transition=".2s"
                            cursor="pointer"
                            textAlign="center"
                            _hover={{
                                opacity: 0.6,
                            }}
                        >
                            Calças Alfaiataria
                        </Text>
                        <Text
                            color={
                                sexSelected === "masculine"
                                    ? "white"
                                    : "secondary.800"
                            }
                            fontWeight="bold"
                            onClick={() => setSearch("Bermudas")}
                            transition=".2s"
                            cursor="pointer"
                            textAlign="center"
                            _hover={{
                                opacity: 0.6,
                            }}
                        >
                            Bermudas
                        </Text>
                    </Flex>
                    <Flex direction="column" gap={3} px={10} py={5}>
                        <Text
                            color={
                                sexSelected === "masculine"
                                    ? "white"
                                    : "secondary.800"
                            }
                            fontWeight="bold"
                            onClick={() => setSearch("Calçados")}
                            transition=".2s"
                            cursor="pointer"
                            textAlign="center"
                            _hover={{
                                opacity: 0.6,
                            }}
                        >
                            Calçados
                        </Text>
                        <Text
                            color={
                                sexSelected === "masculine"
                                    ? "white"
                                    : "secondary.800"
                            }
                            fontWeight="bold"
                            onClick={() => setSearch("Acessórios")}
                            transition=".2s"
                            cursor="pointer"
                            textAlign="center"
                            _hover={{
                                opacity: 0.6,
                            }}
                        >
                            Acessórios
                        </Text>
                        <Text
                            color={
                                sexSelected === "masculine"
                                    ? "white"
                                    : "secondary.800"
                            }
                            fontWeight="bold"
                            onClick={() => setSearch("Livros")}
                            transition=".2s"
                            cursor="pointer"
                            textAlign="center"
                            _hover={{
                                opacity: 0.6,
                            }}
                        >
                            Livros
                        </Text>
                    </Flex>
                </Flex>
                <Grid
                    w={{ base: "95%", md: "85%" }}
                    mx="auto"
                    gridTemplateColumns={{
                        base: "repeat(2,1fr)",
                        md: "repeat(3,1fr)",
                        lg: "repeat(4,1fr)",
                    }}
                    gap={{ base: 3, md: 10 }}
                    mt={14}
                >
                    {renderItem().map((product, index) => (
                        <CardProduct
                            key={index}
                            product={product}
                            onClick={() =>
                                router.push(`productDetails/${product.id}`)
                            }
                        />
                    ))}
                </Grid>
                <Pagination page={page} prev={prevPage} next={nextPage} />
            </Flex>
        </MainLayout>
    );
};

export default AllProducts;
