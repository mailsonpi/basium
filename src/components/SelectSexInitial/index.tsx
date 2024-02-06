import React from "react";
import { Box, Center, Grid, Image, Text } from "@chakra-ui/react";

interface IProps {
    onClick: (isMasculine: boolean) => void;
}

const SelectSexInitial: React.FC<IProps> = ({ onClick }) => {
    return (
        <Grid
            gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap={10}
            px={10}
        >
            <Center
                display={{ base: "none", md: "flex" }}
                h={400}
                onClick={() => onClick(false)}
                bg={{
                    base: "url('/ImgInitialPage/menumobile_feminina.png')",
                    md: "url('/ImgInitialPage/moda_feminina.png')",
                }}
                bgRepeat="no-repeat"
                bgSize="cover"
                cursor="pointer"
                transition=".4s"
                w="100%"
                _hover={{
                    filter: "brightness(0.8)",
                }}
            >
                <Box
                    p={4}
                    border="2px solid"
                    borderColor="primary.100"
                    rounded="full"
                >
                    <Text
                        fontFamily="'DM Serif Display', serif"
                        fontSize={{ base: 24, md: 42 }}
                        color="primary.100"
                    >
                        Moda Feminina
                    </Text>
                </Box>
            </Center>
            <Center
                display={{ base: "none", md: "flex" }}
                h={400}
                onClick={() => onClick(true)}
                bg={{
                    base: "url('/ImgInitialPage/menumobile_masculina.png')",
                    md: "url('/ImgInitialPage/moda_masculina.png')",
                }}
                w="100%"
                bgRepeat="no-repeat"
                bgPosition="center"
                cursor="pointer"
                transition=".4s"
                _hover={{
                    filter: "brightness(0.8)",
                }}
            >
                <Box
                    p={4}
                    border="2px solid"
                    borderColor="primary.100"
                    rounded="full"
                >
                    <Text
                        fontFamily="'DM Serif Display', serif"
                        fontSize={{ base: 24, md: 42 }}
                        color="primary.100"
                    >
                        Moda Masculina
                    </Text>
                </Box>
            </Center>
            <Image
                src="/ImgInitialPage/mobilemenumasc.svg"
                display={{ base: "block", md: "none" }}
                alt="Moda Masculina"
                w="100%"
                _hover={{
                    filter: "brightness(0.8)",
                }}
            />
            <Image
                src="/ImgInitialPage/mobilemenufem.svg"
                display={{ base: "block", md: "none" }}
                alt="Moda Masculina"
                w="100%"
                _hover={{
                    filter: "brightness(0.8)",
                }}
            />
        </Grid>
    );
};

export default SelectSexInitial;
