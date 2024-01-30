import React from "react";
import { Box, Center, Flex, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const InitialCarousel: React.FC = () => {
    const customRenderIndicator = (
        onClickHandler: React.MouseEventHandler,
        isSelected: boolean,
        index: number
    ) => {
        return (
            <Box
                as="li"
                display="inline-block"
                listStyleType="none"
                key={index}
                value={index}
                onClick={onClickHandler}
                tabIndex={0}
                role="button"
                mx="1"
                boxSize="4"
                borderRadius="50%"
                cursor="pointer"
                bg={isSelected ? "black" : "white"}
                borderWidth="1px"
                borderColor="black"
            />
        );
    };
    const sliders = [
        {
            url: "url('/ImgInitialPage/slide1.png')",
            urlMobile: "url('/ImgInitialPage/slide1_mobile.png')",
        },
        {
            url: "url('/ImgInitialPage/slide1.png')",
            urlMobile: "url('/ImgInitialPage/slide1_mobile.png')",
        },
    ];

    return (
        <Flex w="100%" flexDirection="column">
            <Carousel
                showIndicators
                showStatus={false}
                showThumbs={false}
                swipeable
                emulateTouch
                width="100%"
                infiniteLoop
                renderIndicator={customRenderIndicator}
                interval={2000}
                autoPlay
            >
                {sliders.map((banner, index) => (
                    <Flex
                        key={index}
                        flexDirection="column"
                        justifyContent="space-between"
                        bgImage={{ base: banner.urlMobile, md: banner.url }}
                        h={{ base: "68vh", md: "68vh" }}
                        mx="auto"
                        bgPosition={{ base: "center", md: "top" }}
                        bgRepeat="no-repeat"
                    />
                ))}
            </Carousel>
            <Center bg="secondary.900" py={8}>
                <Image src="/ImgInitialPage/marca_1.png" alt="Marca" />
            </Center>
        </Flex>
    );
};

export default InitialCarousel;
