import { useCheckSexSelected } from "@/context";
import {
    Button,
    ModalContent,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalCloseButton,
    Box,
    Input,
    Text,
    Select,
    useToast,
    Spinner,
    Center,
} from "@chakra-ui/react";
import emailjs from "emailjs-com";
import React from "react";

interface IProps {
    children: React.ReactNode;
    isMasculine: boolean;
}

const Quiz: React.FC<IProps> = ({ children, isMasculine }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { sexSelected } = useCheckSexSelected();
    const [load, setLoad] = React.useState(false);
    const [youFind, setYouFind] = React.useState("Calçados");
    const [color, setColor] = React.useState("");
    const [occasion, setOccasion] = React.useState("");
    const [number, setNumber] = React.useState("");
    const toast = useToast();

    emailjs.init("XTznaL0dunG27kq9B");

    const enviarEmail = async () => {
        const templateParams = {
            message: `
                O que você procura: ${youFind},
                Cor: ${color},
                Ocasião: ${occasion},
                Numero do cliente: ${number},
            `,
        };
        setLoad(true);
        try {
            await emailjs.send(
                "service_ez28z1m",
                "template_d85e4ue",
                templateParams
            );
            toast({
                status: "success",
                title: "Muito Obrigado!",
                isClosable: true,
                description: "Seu email foi enviado com sucesso!",
            });
            onClose();
        } catch (err) {
            console.log(err);
        } finally {
            setLoad(false);
        }
    };

    const cellNumberFormat = (inputValue: string) => {
        if (!inputValue) return "";
        inputValue = inputValue.replace(/\D/g, "");

        if (inputValue.length <= 2) {
            inputValue = `(${inputValue}`;
        } else if (inputValue.length <= 3) {
            inputValue = `(${inputValue.substring(
                0,
                2
            )}) ${inputValue.substring(2)}`;
        } else if (inputValue.length <= 7) {
            inputValue = `(${inputValue.substring(
                0,
                2
            )}) ${inputValue.substring(2, 3)} ${inputValue.substring(3)}`;
        } else {
            inputValue = `(${inputValue.substring(
                0,
                2
            )}) ${inputValue.substring(2, 3)} ${inputValue.substring(
                3,
                7
            )}-${inputValue.substring(7, 11)}`;
        }
        return inputValue;
    };
    return (
        <>
            <Box onClick={onOpen}>{children}</Box>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay
                    bg="blackAlpha.300"
                    backdropFilter="blur(10px) hue-rotate(90deg)"
                />
                <ModalContent
                    mt={40}
                    mx={3}
                    bg={
                        sexSelected === "masculine"
                            ? "secondary.900"
                            : "primary.400"
                    }
                >
                    <ModalHeader
                        color={
                            sexSelected === "masculine"
                                ? "white"
                                : "secondary.900"
                        }
                    >
                        Quiz
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                        color={
                            sexSelected === "masculine"
                                ? "white"
                                : "secondary.900"
                        }
                        fontSize={18}
                        minH={300}
                    >
                        {load ? (
                            <Center h={300}>
                                <Spinner mx="auto" size="xl" />
                            </Center>
                        ) : (
                            <>
                                <Text mb={1}>Oque voce procura?</Text>
                                <Select
                                    color="black"
                                    rounded="full"
                                    mb={4}
                                    onChange={(e) => setYouFind(e.target.value)}
                                >
                                    <option>Calçados</option>
                                    <option>Bermudas</option>
                                    <option>Calças Alfaiataria</option>
                                    <option>Blazer</option>
                                    <option>T-Shirts</option>
                                    <option>Calças Jeans</option>
                                    <option>Blusas Sociais</option>
                                    <option>Moda Casual </option>
                                    <option>Moda Corporativa</option>
                                    <option>Livros</option>
                                    <option>Camisas</option>
                                    <option>Nova coleção</option>
                                    <option>Camisa Polo</option>
                                    <option>Trajes</option>
                                </Select>
                                <Text mb={1}>Qual Cor?</Text>
                                <Input
                                    bg="primary.100"
                                    color="black"
                                    mb={4}
                                    _focus={{
                                        bg: "primary.100",
                                    }}
                                    onChange={(e) => setColor(e.target.value)}
                                />
                                <Text mb={1}>Qual ocasião?</Text>
                                <Input
                                    bg="primary.100"
                                    color="black"
                                    mb={4}
                                    _focus={{
                                        bg: "primary.100",
                                    }}
                                    onChange={(e) =>
                                        setOccasion(e.target.value)
                                    }
                                />
                                <Text mb={1}>Digite seu número:</Text>
                                <Input
                                    bg="primary.100"
                                    color="black"
                                    mb={4}
                                    value={number}
                                    _focus={{
                                        bg: "primary.100",
                                    }}
                                    onChange={(e) =>
                                        setNumber(
                                            cellNumberFormat(e.target.value)
                                        )
                                    }
                                />
                            </>
                        )}
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            mr={3}
                            onClick={onClose}
                            variant="ghost"
                            color={
                                sexSelected === "masculine"
                                    ? "white"
                                    : "secondary.900"
                            }
                            _hover={{
                                background: "transparent",
                                color: "primary.500",
                            }}
                        >
                            Fechar
                        </Button>
                        <Button
                            variant="ghost"
                            color={
                                sexSelected === "masculine"
                                    ? "white"
                                    : "secondary.900"
                            }
                            _hover={{
                                background: "transparent",
                                color: "primary.500",
                            }}
                            onClick={() => enviarEmail()}
                        >
                            Enviar!
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export { Quiz };
