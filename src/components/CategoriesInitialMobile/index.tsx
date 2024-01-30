import React from "react";
import { Grid, Image } from "@chakra-ui/react";
import { category } from "@/resources/products/categorias";

interface IProps {
    onClickProduct: (categoria: category, isMasculine?: boolean) => void;
}

const CategoriesInitialMobile: React.FC<IProps> = ({ onClickProduct }) => {
    return (
        <Grid gridTemplateColumns="1fr 1fr" p={10} gap={10}>
            <Image
                w="100%"
                src="/ImgInitialPage/menu_blazermobile.png"
                onClick={() => onClickProduct("Blazer", true)}
                alt="Blazer"
                cursor="pointer"
                transition=".4s"
                _hover={{
                    opacity: 0.8,
                }}
            />
            <Image
                w="100%"
                src="/ImgInitialPage/menu_blazerfemmobile.png"
                onClick={() => onClickProduct("Blazer")}
                alt="Calça"
                cursor="pointer"
                transition=".4s"
                _hover={{
                    opacity: 0.8,
                }}
            />
        </Grid>
    );
};

export default CategoriesInitialMobile;
