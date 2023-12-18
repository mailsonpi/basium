import { ComponentStyleConfig } from "@chakra-ui/react";
import { theme } from "@chakra-ui/theme";

export const Input: ComponentStyleConfig = {
    defaultProps: {
        variant: "filled",
        _hover: {
            bg: "gray.200",
        },
    },
    variants: {
        filled: (props) => ({
            ...theme.components.Input.variants?.outline(props),
            field: {
                bg: "#DAEADC",
                _placeholder: {
                    color: "secondary.50",
                },
                h: "69px",
                fontFamily: "'GothamMedium', sans-serif",
                color: "secondary.800",
                px: 6,
                borderRadius: 40,
                _focus: {
                    borderColor: "primary.500",
                },
                [`@media (min-width: ${props.theme.breakpoints.base})`]: {
                    h: "50px",
                },
                [`@media (min-width: ${props.theme.breakpoints.md})`]: {
                    fontSize: 24,
                    h: "69px",
                },
            },
        }),
        outline: (props) => ({
            ...theme.components.Input.variants?.outline(props),
            field: {
                h: "68px",
                rounded: "20px",
                borderColor: "secondary.500",
                _hover: {
                    borderColor: "secondary.500",
                    bg: "secondary.50",
                },
                _focus: {
                    borderColor: "secondary.500",
                    bg: "secondary.50",
                    borderWidth: "3px",
                    outline: "none",
                    boxShadow: "0 0 0 0",
                },
                [`@media (min-width: ${props.theme.breakpoints.base})`]: {
                    h: "50px",
                },
                [`@media (min-width: ${props.theme.breakpoints.md})`]: {
                    fontSize: 24,
                    h: "69px",
                },
            },
        }),
    },
};
