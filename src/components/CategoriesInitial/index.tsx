import React from "react";
import { Grid, Image } from "@chakra-ui/react";
import { category } from "@/resources/products/categorias";

interface IProps {
    onClickProduct: (categoria: category, isMasculine?: boolean) => void;
}

const CategoriesInitial: React.FC<IProps> = ({ onClickProduct }) => {
    return (
        <Grid gridTemplateColumns="1fr 1fr 1fr" my={10}>
            <Image
                w="100%"
                src="/ImgInitialPage/menu_blazer.png"
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
                src="/ImgInitialPage/menu_calça.png"
                onClick={() => onClickProduct("Calças Jeans", true)}
                alt="Calça"
                cursor="pointer"
                transition=".4s"
                _hover={{
                    opacity: 0.8,
                }}
            />
            <Image
                w="100%"
                onClick={() => onClickProduct("Blusas Sociais", true)}
                src="/ImgInitialPage/menu_camisa.png"
                alt="Camisa Social"
                cursor="pointer"
                transition=".4s"
                _hover={{
                    opacity: 0.8,
                }}
            />
        </Grid>
    );
};

export default CategoriesInitial;
