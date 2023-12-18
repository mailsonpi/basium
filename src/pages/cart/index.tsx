/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import MainLayout from "@/layout/MainLayout";
import {
    Center,
    Flex,
    Text,
    Heading,
    Button,
    Box,
    Divider,
    chakra,
} from "@chakra-ui/react";
import { useCheckSexSelected } from "@/context";
import { whatsappNumber } from "@/resources/whatsappNumber";
import CartProductCard from "@/components/CartProductCard";
import { useRouter } from "next/router";

interface IItems {
    nome: string;
    id: number;
    marca: string;
    price: number;
    image: string[];
    description: string;
    tamanhos: string[];
    category: string[];
    cores?: string[];
    quantity: string;
    size: string;
    color: string;
}

const Cart = () => {
    const { sexSelected } = useCheckSexSelected();
    const router = useRouter();
    const sendMessage = () => {
        if (typeof window !== "undefined") {
            const local = localStorage.getItem("cartItems");
            if (local) {
                const items = JSON.parse(local);
                const total = items.reduce(
                    (soma: any, elemento: any) =>
                        soma + elemento.price * elemento.quantity,
                    0
                );
                const message = `Olá, gostaria de fazer o seguinte pedido: ${items.map(
                    (item: any) => {
                        return `
================

ID: ${item.id}

Produto: ${item.nome}

Tamanho: ${item.size}

Cor: ${item.color}

Quantidade: ${item.quantity}

Preço unitário: R$${item.price}.00

Valor Total: R$${item.price * item.quantity}.00

================
`;
                    }
                )}
Valor total do pedido: R$${total}.00
                `;

                const url = `whatsapp://send?phone=${whatsappNumber}&text=${encodeURIComponent(
                    message
                )}`;
                window.location.href = url;
            }
        }
    };
    const [products, setProducts] = React.useState<IItems[]>([]);

    React.useEffect(() => {
        if (typeof window !== "undefined") {
            const local = localStorage.getItem("cartItems");
            if (local) {
                setProducts(JSON.parse(local));
            }
        }
    }, []);

    const attQuantity = async (index: number, newQuantity: number) => {
        const localProducts = [...products];
        localProducts[index].quantity = newQuantity.toString();
        setProducts(localProducts);
        localStorage.setItem("cartItems", JSON.stringify(localProducts));
    };
    const attColor = async (index: number, newColor: string) => {
        const localProducts = [...products];
        localProducts[index].color = newColor;
        setProducts(localProducts);
        localStorage.setItem("cartItems", JSON.stringify(localProducts));
    };

    const onClickRemove = (index: number) => {
        const localProducts = [...products];
        localProducts.splice(index, 1);
        setProducts(localProducts);
        localStorage.setItem("cartItems", JSON.stringify(localProducts));
    };

    return (
        <MainLayout
            navbar={{
                hasNavbar: true,
                colorTheming:
                    sexSelected === "masculine" ? "darkCyan" : "ligthPink",
            }}
        >
            <Flex
                flexDir="column"
                bg={
                    sexSelected === "masculine"
                        ? "secondary.900"
                        : "primary.300"
                }
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
                    <Heading fontSize={50}>Carrinho</Heading>
                    <Text fontSize={20}>
                        Adicione seu código de cupom e economize até 70%!
                    </Text>
                </Center>
                {products.length > 0 ? (
                    <Flex
                        direction="column"
                        p={{ base: 1, md: 5 }}
                        bg="white"
                        rounded="xl"
                        w={{ base: "90%", md: 700 }}
                        mx="auto"
                    >
                        <Flex w="100%" mx="auto" direction="column">
                            {products.map((item, index) => (
                                <Box key={index}>
                                    {index > 0 && <Divider my={4} />}
                                    <CartProductCard
                                        key={index}
                                        onClickAttQuantity={(e) =>
                                            attQuantity(index, e)
                                        }
                                        onClickRemove={() =>
                                            onClickRemove(index)
                                        }
                                        onClickAttColor={(e) =>
                                            attColor(index, e)
                                        }
                                        part={{
                                            nome: item.nome,
                                            price:
                                                item.price *
                                                Number(item.quantity),
                                            quantidade: Number(item.quantity),
                                            tamanhos: item.tamanhos,
                                            cores: item.cores,
                                            colorSelected: item.color,
                                            image: item.image[0],
                                        }}
                                    />
                                </Box>
                            ))}
                        </Flex>
                        <Box w="100%" h="1px" mt={5} bg="red.700" />
                    </Flex>
                ) : (
                    <Text textAlign="center" fontSize={28} my={10}>
                        Seu carrinho está vazio! Adicione um item da{" "}
                        <chakra.span
                            _hover={{ color: "secondary.700" }}
                            onClick={() => router.push("/allProducts")}
                            transition=".4s"
                            color={
                                sexSelected === "masculine"
                                    ? "primary.400"
                                    : "secondary.900"
                            }
                            cursor="pointer"
                            fontWeight={600}
                        >
                            lista de produtos!
                        </chakra.span>
                    </Text>
                )}
                {products.length > 0 && (
                    <>
                        <Button
                            w="max-content"
                            bg="primary.500"
                            color="white"
                            my={10}
                            mx="auto"
                            _hover={{
                                bg: "primary.400",
                            }}
                            onClick={sendMessage}
                        >
                            Finalizar Pedido
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={() => {
                                localStorage.clear();
                                setProducts([]);
                            }}
                            w="max-content"
                            mx="auto"
                            color={
                                sexSelected === "masculine"
                                    ? "primary.400"
                                    : "secondary.900"
                            }
                            textDecorationLine="underline"
                            mb={5}
                            _hover={{
                                bg: "transparent",
                            }}
                        >
                            Limpar carrinho.
                        </Button>
                    </>
                )}
            </Flex>
        </MainLayout>
    );
};

export default Cart;
