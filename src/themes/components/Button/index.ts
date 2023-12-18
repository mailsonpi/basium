import { ComponentStyleConfig } from "@chakra-ui/react";
import { theme } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
    defaultProps: {
        defaultProps: {
            variant: "green",
        },
    },
    variants: {
        outline: (props) => ({
            ...theme.components.Button.variants?.outline(props),
            fontSize: 32,
            fontWeight: 500,
            borderRadius: "30px",
            width: "100%",
            color: "primary.500",
            borderColor: "primary.500",
            borderWidth: "3px",
            fontFamily: "'GothamMedium', sans-serif",
            [`@media (min-width: ${props.theme.breakpoints.base})`]: {
                fontSize: 18,
                h: "45px",
            },
            [`@media (min-width: ${props.theme.breakpoints.md})`]: {
                h: "75px",
                fontSize: 32,
            },
        }),
        green: (props) => ({
            ...theme.components.Button.variants?.solid(props),
            px: 6,
            borderRadius: "30px",
            color: "white",
            bg: "primary.500",
            _hover: {
                bg: "primary.300",
            },
            w: "100%",
            fontWeight: 700,
            fontFamily: "'GothamMedium', sans-serif",
            transition: ".4s",
            [`@media (min-width: ${props.theme.breakpoints.base})`]: {
                fontSize: 18,
                h: "45px",
            },
            [`@media (min-width: ${props.theme.breakpoints.md})`]: {
                h: "75px",
                fontSize: 32,
            },
        }),
        gray: (props) => ({
            ...theme.components.Button.variants?.solid(props),
            borderRadius: "30px",
            color: "primary.500",
            bg: "secondary.500",
            _hover: {
                bg: "secondary.400",
            },
            w: "100%",
            fontWeight: 700,
            fontFamily: "'GothamMedium', sans-serif",
            transition: ".4s",
            [`@media (min-width: ${props.theme.breakpoints.base})`]: {
                fontSize: 18,
                h: "45px",
            },
            [`@media (min-width: ${props.theme.breakpoints.md})`]: {
                h: "75px",
                fontSize: 32,
            },
        }),
    },
};
