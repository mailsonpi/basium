import { category } from "@/resources/products/categorias";
interface Livros {
    nome: string;
    id: number;
    price: number;
    image: string[];
    description: string;
    category: category[];
}

const livros: Livros[] = [
    {
        id: 40000,
        nome: "Livro",
        price: 1500,
        image: [
            "/img/products/ts2.jpeg",
            "/img/products/ts2.jpeg",
            "/img/products/ts2.jpeg",
        ],
        category: ["Livros"],
        description: "Este é um livro",
    },
];

export { livros };
