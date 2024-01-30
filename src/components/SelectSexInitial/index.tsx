import React from "react";
import { Box, Center, Grid, Text } from "@chakra-ui/react";

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
                h={400}
                bgPosition="center"
                onClick={() => onClick(false)}
                bg="url('/ImgInitialPage/moda_feminina.png')"
                cursor="pointer"
                transition=".4s"
                w="100%"
                _hover={{
                    opacity: 0.8,
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
                        fontSize={42}
                        color="primary.100"
                    >
                        Moda Feminina
                    </Text>
                </Box>
            </Center>
            <Center
                h={400}
                onClick={() => onClick(true)}
                bg="url('/ImgInitialPage/moda_masculina.png')"
                w="100%"
                cursor="pointer"
                transition=".4s"
                _hover={{
                    opacity: 0.8,
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
                        fontSize={42}
                        color="primary.100"
                    >
                        Moda Masculina
                    </Text>
                </Box>
            </Center>
        </Grid>
    );
};

export default SelectSexInitial;
