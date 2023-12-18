import React from "react";
import { NextPage } from "next";
import { Flex } from "@chakra-ui/react";
import MainLayout from "@/layout/MainLayout";
import HomeCarousel from "@/components/HomeCarousel";
import OptionsNavigation from "@/components/OptionsNavigation";
import Categories from "@/components/Categories";
import ProductList from "@/components/ProductList";
import NewCollection from "@/components/NewCollection";
import { useCheckSexSelected } from "@/context";

const Home: NextPage = () => {
    const { sexSelected } = useCheckSexSelected();
    return (
        <MainLayout
            navbar={{
                colorTheming:
                    sexSelected === "masculine" ? "darkCyan" : "ligthPink",
                hasNavbar: true,
            }}
        >
            <Flex
                bgColor={sexSelected === "masculine" ? "secondary.900" : "#fff"}
                bgPosition="cover"
                flexDirection="column"
            >
                <HomeCarousel />
                <OptionsNavigation />
                <Categories />
                <ProductList />
                <NewCollection />
            </Flex>
        </MainLayout>
    );
};

export default Home;
