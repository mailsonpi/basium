import React from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useCheckSexSelected } from "@/context";

const HomeCarousel: React.FC = () => {
    const { sexSelected } = useCheckSexSelected();

    const bannersMasculine = [
        {
            url: "url('/ImgBannerHome/fullbanner_acessorios.svg')",
            text1: "Seu estilo com toque de classe!",
            text2: "Acessórios a partir de",
            text3: "R$ 35,90",
            off: {
                text1: "Parcelas de 6x sem juros",
                text2: "Enviamos para todo Brasil",
                text3: "Desconto de 10% em compras no pix",
            },
        },
        {
            url: "url('/ImgBannerHome/fullbanner_sapatos.svg')",
            text1: "",
            text2: "Sapatos a partir de",
            text3: "R$ 315,00",
            off: {
                text1: "",
                text2: "",
                text3: "",
            },
        },
        {
            url: "url('/ImgBannerHome/fullbanner_camisassociais.svg')",
            text1: "",
            text2: "Camisas Sociais a partir de",
            text3: "R$ 230,00",
            off: {
                text1: "",
                text2: "",
                text3: "",
            },
        },
        {
            url: "url('/ImgBannerHome/fullbanner_blazers.svg')",
            text1: "",
            text2: "Blazers a partir de",
            text3: "R$ 590,00",
            off: {
                text1: "",
                text2: "",
                text3: "",
            },
        },
        {
            url: "url('/ImgBannerHome/fullbanner_calças.svg')",
            text1: "",
            text2: "Calças a partir de",
            text3: "R$ 195,00",
            off: {
                text1: "",
                text2: "",
                text3: "",
            },
        },
        {
            url: "url('/ImgBannerHome/fullbanner_trajes.svg')",
            text1: "",
            text2: "Trajes a partir de",
            text3: "R$ 980,00",
            off: {
                text1: "",
                text2: "",
                text3: "",
            },
        },
    ];

    const bannersFeminine = [
        {
            url: "url('/ImgBannerHome/fullbanner_roupasF.svg')",
            text2: "Roupas a partir de",
            text3: "R$ 99,90",
            off: {
                text1: "Parcelas de 6x sem juros",
                text2: "Enviamos para todo Brasil",
                text3: "Desconto de 10% em compras no pix",
            },
        },
        {
            url: "url('/ImgBannerHome/fullbanner_acessoriosF.svg')",
            text2: "Acessórios a partir de",
            text3: "R$ 34,99",
            off: {
                text1: "",
                text2: "",
                text3: "",
            },
        },
        {
            url: "url('/ImgBannerHome/fullbanner_calcadosF.svg')",
            text2: "Calçados a partir de",
            text3: "R$ 179,90",
            off: {
                text1: "",
                text2: "",
                text3: "",
            },
        },
    ];

    const banners =
        sexSelected === "masculine" ? bannersMasculine : bannersFeminine;

    return (
        <Flex
            w="100%"
            flexDirection="column"
            bg={sexSelected === "masculine" ? "none" : "#EDE5D9"}
        >
            <Carousel
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                swipeable
                emulateTouch
                width="100%"
                infiniteLoop
                interval={2000}
                autoPlay
            >
                {banners.map((banner, index) => (
                    <Flex
                        mt={{ base: 10, md: 3 }}
                        key={index}
                        flexDirection="column"
                        justifyContent="space-between"
                        bgImage={{ base: "none", md: banner.url }}
                        mx="auto"
                        bgRepeat="no-repeat"
                        bgPosition="right"
                        h={{ base: "45vh", md: "68vh" }}
                    >
                        <Flex
                            direction="column"
                            mt={{ base: 0, md: 44 }}
                            ml="10%"
                        >
                            <Text
                                fontSize={{ base: 44, md: 60 }}
                                color="primary.500"
                                fontWeight={600}
                                lineHeight={0.9}
                            >
                                {banner.text2}
                            </Text>
                            <Text
                                fontSize={{ base: 38, md: 70 }}
                                color="primary.400"
                                fontWeight={600}
                                lineHeight={0.9}
                            >
                                {banner.text3}
                            </Text>
                            <Flex
                                flexDirection="column"
                                mt={2}
                                color="primary.500"
                            >
                                <Text color="primary.400" fontWeight={600}>
                                    {banner.off.text1}
                                </Text>
                                <Text color="primary.400" fontWeight={600}>
                                    {banner.off.text2}
                                </Text>
                                <Text color="primary.400" fontWeight={600}>
                                    {banner.off.text3}
                                </Text>
                                <Button
                                    backgroundRepeat="no-repeat"
                                    background="url('img/button.png')"
                                    bgPosition="center"
                                    _hover={{
                                        background: "url('img/button.png')",
                                        bgPosition: "center",
                                    }}
                                    w="200px"
                                    mt={32}
                                    fontSize="15px"
                                    h="50px"
                                    color="white"
                                    rounded="none"
                                >
                                    Compre Agora
                                </Button>
                            </Flex>
                        </Flex>
                    </Flex>
                ))}
            </Carousel>
        </Flex>
    );
};

export default HomeCarousel;
