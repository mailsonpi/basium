export interface IListTips {
    id: number;
    title: string;
    subTitle: string;
    image: string;
    details: {
        title: string;
        description: string;
        listTips: string[];
    };
}

const tips: IListTips[] = [
    {
        id: 0,
        title: "Como cuidar das peças conforme cada tecido.",
        subTitle: "Te ajudamos a manter suas peças bem conservadas",
        image: "/imagem_tecidos.webp",
        details: {
            title: "Tecidos",
            description:
                "Cuidar da lavagem das peças de alfaiataria é importante para manter a qualidade e durabilidade das roupas. Isso porque essas peças são geralmente feitas de tecidos mais delicados e com acabamentos especiais, como lã, seda, linho e algodão, e podem ser danificadas se forem lavadas de forma inadequada. Algumas dicas para cuidar da lavagem das peças de alfaiataria incluem:",
            listTips: [
                "1° Ler as instruções de lavagem presentes na etiqueta da peça antes de lavá-la.",
                "2° Separar as peças por cor e tecido antes de colocá-las na máquina de lavar.",
                "3° Utilizar água fria ou morna para lavar as peças de alfaiataria, evitando água quente que pode danificar os tecidos.",
                "4° Usar sabão líquido ou em pó suave para tecidos delicados, evitando amaciantes e alvejantes.",
                "5° Utilizar o ciclo de lavagem delicado da máquina e, se possível, colocar as peças em um saco próprio para lavagem.",
                "6° Secar as peças de alfaiataria em um varal ou na horizontal, evitando secadoras que podem encolher ou danificar os tecidos.",
                "7° Passar as peças de alfaiataria a ferro em temperatura média ou baixa, evitando temperaturas altas que podem queimar ou danificar os tecidos.",
            ],
        },
    },
    {
        id: 1,
        title: "Quais livros para cada ocasião",
        subTitle: "Dicas de qual livro escolher",
        image: "/imagem_livros.webp",
        details: {
            title: "Livros",
            description:
                "Top 5 de Livros para construir uma mentalidade vencedora:",
            listTips: [
                "1° O milagre da manhã",
                "2° Os segredos da mente milionária",
                "3° Os 7 hábitos das pessoas altamente eficazes",
                "4° Mais esperto que o Diabo ",
                "5° A arte de argumentar",
            ],
        },
    },
    {
        id: 2,
        title: "Cuidados com acessórios",
        subTitle: "Cuidado na hora de escolher os acessórios",
        image: "/imagem_acessorios.webp",
        details: {
            title: "Acessorios",
            description:
                "Cuidar da vida útil dos acessórios é muito importante pois, são peças chaves para compor meus looks no dia-dia com bastante estilo e elegância, e trazendo um toque de classe. Por isso deixamos aqui algumas dicas que irão ajudar.",
            listTips: [
                "1° Guarde com cuidado.",
                "2° Evite contato com produtos químicos.",
                "3° Lustre com flanela.",
                "4° Não passe perfume direto na peça.",
                "5° Limpe suas peças com água e sabão neutro.",
                "6° Evite usar suas peças no mar e piscina.",
            ],
        },
    },
];

export { tips };
