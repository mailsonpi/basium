import React from "react";
import {
    Flex,
    Text,
    Image,
    Heading,
    Select,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Button,
    useToast,
    Box,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import MainLayout from "@/layout/MainLayout";
import { IPart } from "@/resources/products/masculino/camisas";
import { useCheckSexSelected } from "@/context";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { masculineProducts } from "@/resources/products/masculino";
import { feminineProducts } from "@/resources/products/feminino";

const ProductDetails: NextPage = () => {
    const { sexSelected } = useCheckSexSelected();
    const [product, setProduct] = React.useState<IPart>();
    const [quantity, setQuantity] = React.useState(1);
    const [size, setSize] = React.useState("P");
    const [cor, setCor] = React.useState("");
    const router = useRouter();
    const { id } = router.query;
    const toast = useToast();
    const typeOfProducts =
        sexSelected === "masculine" ? masculineProducts : feminineProducts;

    const getProduct = () => {
        const items: IPart[] = [];
        typeOfProducts.map((item) => items.push(...item));
        const camisa = items.find((item: any) => item.id === Number(id));
        setProduct(camisa);
    };
    const addProduct = async () => {
        const allProducts = [];
        if (typeof window !== "undefined") {
            const local = localStorage.getItem("cartItems");
            const cartItems = await JSON.parse(local as string);
            allProducts.push(...(cartItems || []));
        }

        if (product) {
            const alreadyExist = allProducts.find(
                (item) => item.id === product.id
            );
            if (!alreadyExist) {
                allProducts.push({
                    ...product,
                    color: cor,
                    quantity,
                    size,
                });
                window.localStorage.setItem(
                    "cartItems",
                    JSON.stringify(allProducts)
                );
                toast({
                    title: "Produto Adicionado",
                    description: "O produto foi adicionado ao seu carrinho.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
                router.push("/cart");
                return;
            }
            toast({
                title: "Produto Repetido",
                description: "Este produto já está em seu carrinho",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    };
    React.useEffect(() => {
        getProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, product]);
    return (
        <MainLayout
            navbar={{
                hasNavbar: true,
                colorTheming:
                    sexSelected === "masculine" ? "darkCyan" : "ligthPink",
            }}
        >
            <Flex
                direction="column"
                bgColor={
                    sexSelected === "masculine" ? "secondary.900" : "white"
                }
                bgPosition="cover"
                py={10}
                justifyContent="center"
                alignItems="center"
            >
                <Flex
                    direction={{ base: "column", md: "row" }}
                    justifyContent="center"
                    w={{ base: "330px", md: "500px" }}
                >
                    <Flex direction="column" gap={3} w="100%">
                        <Carousel
                            showIndicators={false}
                            showArrows={false}
                            swipeable
                            emulateTouch
                            showThumbs
                            infiniteLoop
                            interval={2000}
                            autoPlay
                        >
                            {product?.image.map((item, index) => (
                                <Box
                                    key={index}
                                    w={{ base: "330px", md: "500px" }}
                                    h={{ base: "max-content", md: "500px" }}
                                    mx="auto"
                                >
                                    <Image
                                        objectFit="cover"
                                        objectPosition="center"
                                        src={item}
                                        alt={item + index}
                                        mx="auto"
                                        mb={5}
                                    />
                                </Box>
                            ))}
                        </Carousel>
                    </Flex>
                    <Flex direction="column" ml={5}>
                        <Flex>
                            <Text
                                fontWeight={600}
                                color={"black"}
                                mb={5}
                                mr={2}
                                cursor="pointer"
                                transition=".4s"
                                _hover={{ color: "primary.500" }}
                                onClick={() => router.back()}
                            >
                                Home
                            </Text>
                            <Text
                                color={
                                    sexSelected === "masculine"
                                        ? "white"
                                        : "secondary.900"
                                }
                            >
                                / {product?.marca}
                            </Text>
                        </Flex>
                        <Heading
                            fontSize={{ base: 24, md: 40 }}
                            maxW={{ base: "90%", md: "100%" }}
                            color={
                                sexSelected === "masculine"
                                    ? "white"
                                    : "secondary.900"
                            }
                        >
                            {product?.nome}
                        </Heading>
                        <Text>{product?.description}</Text>
                        <Heading
                            mb={3}
                            color={
                                sexSelected === "masculine"
                                    ? "white"
                                    : "secondary.900"
                            }
                        >
                            R$ {product?.price}
                        </Heading>
                        <Flex gap={3}>
                            <Select
                                w="max-content"
                                onChange={(e) => setSize(e.target.value)}
                            >
                                {product?.tamanhos.map((item) => (
                                    <option
                                        key={item}
                                        style={{ textAlign: "center" }}
                                    >
                                        {item}
                                    </option>
                                ))}
                            </Select>
                            {product?.cores && (
                                <Select
                                    w="max-content"
                                    onChange={(e) => setCor(e.target.value)}
                                >
                                    {product?.cores?.map((item) => (
                                        <option
                                            key={item}
                                            style={{ textAlign: "center" }}
                                        >
                                            {item}
                                        </option>
                                    ))}
                                </Select>
                            )}
                        </Flex>
                        <Flex mt={5} gap={4}>
                            <NumberInput
                                size="lg"
                                w={20}
                                defaultValue={1}
                                max={10}
                                min={1}
                                onChange={(e) => setQuantity(Number(e))}
                            >
                                <NumberInputField bg="primary.100" />
                                <NumberInputStepper bg="white">
                                    <NumberIncrementStepper bg="white" />
                                    <NumberDecrementStepper bg="white" />
                                </NumberInputStepper>
                            </NumberInput>
                            <Button
                                h="45px"
                                color={
                                    sexSelected === "masculine"
                                        ? "white"
                                        : "secondary.900"
                                }
                                bg="green.500"
                                onClick={() => addProduct()}
                            >
                                Adicionar ao carrinho
                            </Button>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </MainLayout>
    );
};

export default ProductDetails;
