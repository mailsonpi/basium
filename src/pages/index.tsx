import React from "react";
import { NextPage } from "next";
import { Box, Flex } from "@chakra-ui/react";
import InitialCarousel from "@/components/InitialCarousel";
import CategoriesInitial from "@/components/CategoriesInitial";
import SelectSexInitial from "@/components/SelectSexInitial";
import CategoriesInitialFem from "@/components/CategoriesInitialFem";
import Footer from "@/layout/Footer";
import { useRouter } from "next/router";
import { category } from "@/resources/products/categorias";
import CategoriesInitialMobile from "@/components/CategoriesInitialMobile";
import MobileCategorySelect from "@/components/MobileCategorySelect";

const InitialPage: NextPage = () => {
    const router = useRouter();
    const onClick = (isMasculine: boolean) => {
        if (isMasculine) {
            router.push("/loading");
            localStorage.setItem("sex", "masculine");
            return;
        }
        router.push("/loading");
        localStorage.setItem("sex", "feminine");
    };

    const onGoToFilteredProducts = (
        filter: category,
        isMasculine?: boolean
    ) => {
        if (isMasculine) {
            localStorage.setItem("category", filter);
            localStorage.setItem("sex", "masculine");
            router.push("secondLoading");
            return;
        }
        localStorage.setItem("sex", "feminine");
        localStorage.setItem("category", filter);
        router.push("secondLoading");
    };

    return (
        <Flex flexDirection="column">
            <Flex flexDirection="column" display={{ base: "none", md: "flex" }}>
                <InitialCarousel />
                <CategoriesInitial onClickProduct={onGoToFilteredProducts} />
                <SelectSexInitial onClick={onClick} />
                <CategoriesInitialFem onClickProduct={onGoToFilteredProducts} />
            </Flex>
            <Flex flexDirection="column" display={{ base: "flex", md: "none" }}>
                <InitialCarousel />
                <CategoriesInitialMobile
                    onClickProduct={onGoToFilteredProducts}
                />
                <SelectSexInitial onClick={onClick} />
                <MobileCategorySelect onClickProduct={onGoToFilteredProducts} />
            </Flex>
            <Footer />
        </Flex>
    );
};

export default InitialPage;
