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
            "https://www.redeicm.org.br/carmo/wp-content/uploads/sites/5/2019/01/Livro.jpg",
            "https://www.redeicm.org.br/carmo/wp-content/uploads/sites/5/2019/01/Livro.jpg",
        ],
        category: ["Livros"],
        description: "Este é um livro",
    },
];

export { livros };
