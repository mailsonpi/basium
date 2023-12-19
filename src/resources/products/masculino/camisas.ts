import { category } from "../categorias";

export interface IPart {
    nome: string;
    id: number;
    marca: string;
    price: number;
    image: string[];
    cores?: string[] | null;
    description: string;
    tamanhos: string[];
    category: category[];
}

const Camisas: IPart[] = [
    {
        id: 31,
        nome: "Camisa Básica - Gola Alta",
        marca: "",
        price: 110,
        image: [
            "/img/products/ts1.jpeg",
            "/img/products/ts1.jpeg",
            "/img/products/ts1.jpeg",
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Preta", "Azul", "Vermelho"],
        category: ["Camisas", "T-Shirts"],
        description: "Composição: “ 100% Algodão, Cor: Creme.",
    },
    {
        id: 32,
        nome: " Camisa Básica - Com Estampa",
        marca: "",
        price: 110,
        image: [
            "/img/products/ts2.jpeg",
            "/img/products/ts2.jpeg",
            "/img/products/ts2.jpeg",
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Preta", "Azul", "Vermelho"],
        category: ["Camisas", "T-Shirts"],
        description: "Composição: “ 100% Algodão.” Cor: Branca.",
    },
    {
        id: 33,
        nome: "Camisa Básica - Azul",
        marca: "",
        price: 110,
        image: [
            "/img/products/ts3.jpeg",
            "/img/products/ts3.jpeg",
            "/img/products/ts3.jpeg",
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Preta", "Azul", "Vermelho"],
        category: ["Camisas", "T-Shirts"],
        description: "Composição: “ 100% Algodão.” Cor: Branca.",
    },
    {
        id: 34,
        nome: "Camisa Básica - Verde Limão",
        marca: "",
        price: 110,
        image: [
            "/img/products/ts4.jpeg",
            "/img/products/ts4.jpeg",
            "/img/products/ts4.jpeg",
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Preta", "Azul", "Vermelho"],
        category: ["Camisas", "T-Shirts"],
        description: "Composição: “ 100% Algodão.” Cor: Verde Limão.",
    },
    {
        id: 35,
        nome: " Camisa Básica - Marrom Claro",
        marca: "",
        price: 110,
        image: [
            "/img/products/ts5.jpeg",
            "/img/products/ts5.jpeg",
            "/img/products/ts5.jpeg",
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Preta", "Azul", "Vermelho"],
        category: ["Camisas", "T-Shirts"],
        description: "Composição: “ 100% Algodão.” Cor: Marrom Claro.",
    },
    {
        id: 36,
        nome: "Camisa Básica - Creme",
        marca: "",
        price: 110,
        image: [
            "/img/products/ts6.jpeg",
            "/img/products/ts6.jpeg",
            "/img/products/ts6.jpeg",
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Preta", "Azul", "Vermelho"],
        category: ["Camisas", "T-Shirts"],
        description: "Composição: “ 100% Algodão.” Cor: Creme.",
    },
    {
        id: 37,
        nome: "Camisa Básica - Azul Marinho c/  Estampa",
        marca: "",
        price: 110,
        image: [
            "/img/products/ts7.jpeg",
            "/img/products/ts7.jpeg",
            "/img/products/ts7.jpeg",
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Preta", "Azul", "Vermelho"],
        category: ["Camisas", "T-Shirts"],
        description:
            "Composição: “ 100% Algodão.” Cor: Azul Marinho c/ Estampa.",
    },
    {
        id: 38,
        nome: "Camisa Básica - Branca",
        marca: "",
        price: 110,
        image: [
            "/img/products/ts8.jpeg",
            "/img/products/ts8.jpeg",
            "/img/products/ts8.jpeg",
        ],
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Preta", "Azul", "Vermelho"],
        category: ["Camisas", "T-Shirts"],
        description: "Composição: “ 100% Algodão.” Cor: Branca.",
    },
];

export { Camisas };
