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
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fexame.com%2Fcarreira%2Fdia-mundial-do-livro-nove-executivas-indicam-obras-essencias-para-sua-carreira%2F&psig=AOvVaw3I7w2u0GgyoYCs_NjXHJEy&ust=1703034295660000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDxsKSnmoMDFQAAAAAdAAAAABAD",
        ],
        category: ["Livros"],
        description: "Este é um livro",
    },
];

export { livros };
