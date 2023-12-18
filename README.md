# Basium

## Guia para rodar projeto
- Necessário Node v16 no mínimo, desejável: Node v18;
- Tendo Node instalado em sua máquina, agora instale as depêndencias do projeto rodando o comando "npm i" ou "yarn install" no terminal.
- Rode o comando "npm run dev" ou "yarn dev" para executar os arquivos em sua máquina.
- Entre em "http://localhost:3000/" para acessar o projeto.

## Guia para adicionar produtos:

### Em "src/resources/products" existem duas pastas, "masculino" e "feminino" com os arquivos dos produtos correspondentes, lá é o único lugar que será necessário mexer para renderizar o produto.

# Para adicionar um produto é preciso manter a estrutura das propiedades, alterando apenas o valor.
o que é uma propiedade? no exemplo abaixo as propiedades seriam id, nome, price, etc. Nunca devem ser alterados, apenas o valor atribuído.

    {
        id: 200001, 
        nome: "Anel de Ouro 18k Infinito com Zircônia an38325",
        marca: "Gold",
        price: 1500,
        image: "https://joiasgold.vteximg.com.br/arquivos/ids/235910-250-250/anel-ouro-dezoito-kilates-infinito-zirconia-joiasgold.jpg?v=638068103745830000",
        tamanhos: ["7", "9", "11"],
        category: ["Acessórios"],
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },

# Observações IMPORTANTES:

- A propiedade "price" sempre deve ser um NÚMERO INTEIRO, ou seja:
### CERTO: 1000
### ERRADO: 6,35 / 1000 reais

- A propiedade "id" jamais deve ser repetida, é um indentificador único de cada produto. Garanta de manter o mais organizado possível a questão do ID.

- Obrigatório seguir a sintaxe desse modelo, levando em consideração aspas, colxetes, até mesmo vírgulas e números inteiros. Não alterar o tipo de dado, em outras palavras, não colocar texto onde existe número.
"5" é diferente de 5. Tudo lido entre aspas é reconhecido como texto, portanto prestar atenção nisso.


## Guia de como organizar os produtos:

### Uma ideia inicial de como organizar os produtos, como premissa o ID:

- acessórios: id (1 à 250);
- bermudas: id (251 à 1000);
- blazer: id (1001 à 1750);
- blusaSocial: id (1751 à 3250);
- calcaAlfaiataria: id (3251 à 4000);
- camisas: id (4001 à 4750);
- sapatos: id (4751 à 5500);

## ID intervalados em 750.

# Para produtos femininos pode ser a mesma coisa, porém com numeração diferente, começando dos "20000" para evitar confusão.




# basium
