import React from "react";
import { Grid, Image } from "@chakra-ui/react";
import { category } from "@/resources/products/categorias";

interface IProps {
    onClickProduct: (categoria: category) => void;
}

const CategoriesInitialFem: React.FC<IProps> = ({ onClickProduct }) => {
    return (
        <Grid gridTemplateColumns="1fr 1fr 1fr" my={10}>
            <Image
                onClick={() => onClickProduct("Blazer")}
                w="100%"
                src="/ImgInitialPage/menu_blazerfem.png"
                alt="Blazer Feminino"
                cursor="pointer"
                transition=".4s"
                _hover={{
                    opacity: 0.8,
                }}
            />
            <Image
                w="100%"
                onClick={() => onClickProduct("Acessórios")}
                src="/ImgInitialPage/menu_bolsas.png"
                alt="Bolsas"
                cursor="pointer"
                transition=".4s"
                _hover={{
                    opacity: 0.8,
                }}
            />
            <Image
                w="100%"
                onClick={() => onClickProduct("Calças Jeans")}
                src="/ImgInitialPage/menu_calçasfem.png"
                alt="Calças Femininas"
                cursor="pointer"
                transition=".4s"
                _hover={{
                    opacity: 0.8,
                }}
            />
        </Grid>
    );
};

export default CategoriesInitialFem;
