import React from "react";
import { Grid, Image } from "@chakra-ui/react";
import { category } from "@/resources/products/categorias";

interface IProps {
    onClickProduct: (categoria: category, isMasculine?: boolean) => void;
}

const MobileCategorySelect: React.FC<IProps> = ({ onClickProduct }) => {
    return (
        <Grid gridTemplateColumns="1fr" my={10}>
            <Image
                w="100%"
                src="/ImgInitialPage/menu_calçasmobile.png"
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
                src="/ImgInitialPage/menu_camisamobile.png"
                alt="Camisa Social"
                cursor="pointer"
                transition=".4s"
                _hover={{
                    opacity: 0.8,
                }}
            />
            <Image
                w="100%"
                src="/ImgInitialPage/menu_bolsasmobile.png"
                onClick={() => onClickProduct("Acessórios")}
                alt="Blazer"
                cursor="pointer"
                transition=".4s"
                _hover={{
                    opacity: 0.8,
                }}
            />
        </Grid>
    );
};

export default MobileCategorySelect;
