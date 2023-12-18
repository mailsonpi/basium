import React from "react";
import { Flex, Text, Box, Select, Image } from "@chakra-ui/react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Counter } from "../Counter";

interface IProps {
    part: {
        nome: string;
        tamanhos: string[];
        cores?: string[];
        price: number;
        quantidade: number;
        colorSelected: string;
        image: string;
    };
    onClickRemove: () => void;
    onClickAttQuantity: (e: number) => void;
    onClickAttColor: (e: string) => void;
}

const CartProductCard: React.FC<IProps> = ({
    part,
    onClickAttQuantity,
    onClickRemove,
    onClickAttColor,
}) => {
    return (
        <Flex
            alignItems="center"
            w="100%"
            gap={{ base: 2, md: 5 }}
            position="relative"
        >
            <Image
                width={{ base: "80px", md: 150 }}
                height="100%"
                style={{ borderRadius: "10px" }}
                src={part.image}
                alt="Produto"
            />
            <Flex
                flexDirection="column"
                justifyContent="space-between"
                h="100%"
                w="100%"
            >
                <Text
                    color="secondary.900"
                    fontSize={{ base: 14, md: 24 }}
                    fontWeight={600}
                >
                    {part.nome}
                </Text>
                <Flex
                    gap={5}
                    justifyContent="space-between"
                    w="100%"
                    flexWrap="wrap"
                >
                    <Flex gap={5} w="100%">
                        <Flex gap={{ base: 1, md: 2 }}>
                            <Box>
                                <Text
                                    color="secondary.900"
                                    fontSize={{ base: 12, md: 20 }}
                                >
                                    Tamanho:
                                </Text>
                                <Select
                                    w={{ base: 50, md: 100 }}
                                    bg="transparent"
                                    border="1px solid red.700"
                                    h={{ base: "30px", md: "46px" }}
                                    fontSize={12}
                                    variant="cart"
                                    value={part.colorSelected}
                                >
                                    {part.tamanhos.map((item, index) => (
                                        <option key={index + item}>
                                            {item}
                                        </option>
                                    ))}
                                </Select>
                            </Box>
                            <Flex direction="column">
                                <Text
                                    color="secondary.900"
                                    fontSize={{ base: 12, md: 20 }}
                                >
                                    Quantidade:
                                </Text>
                                <Counter
                                    onChange={onClickAttQuantity}
                                    quantity={part.quantidade}
                                />
                            </Flex>
                            {part.cores && (
                                <Box>
                                    <Text
                                        color="secondary.900"
                                        fontSize={{ base: 12, md: 20 }}
                                    >
                                        Cores:
                                    </Text>
                                    <Select
                                        w={90}
                                        bg="transparent"
                                        border="1px solid red.700"
                                        fontSize={12}
                                        h={{ base: "30px", md: "46px" }}
                                        variant="cart"
                                        onChange={({ target: { value } }) =>
                                            onClickAttColor(value)
                                        }
                                    >
                                        {part.cores.map((item, index) => (
                                            <option key={index + item}>
                                                {item}
                                            </option>
                                        ))}
                                    </Select>
                                </Box>
                            )}
                        </Flex>
                    </Flex>
                    <Text
                        color="secondary.900"
                        cursor="pointer"
                        fontWeight={600}
                        fontSize={{ base: 14, md: 22 }}
                        textAlign="center"
                        alignSelf="flex-end"
                        mr={3}
                    >
                        R${part.price},00
                    </Text>
                    <Box
                        cursor="pointer"
                        onClick={onClickRemove}
                        position="absolute"
                        top={2}
                        right={2}
                    >
                        <RiDeleteBin5Line color="secondary.900" size={20} />
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default CartProductCard;
