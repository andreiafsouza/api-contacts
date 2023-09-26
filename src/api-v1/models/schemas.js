export const pessoaSchema = {
  type: "object",
  properties: {
    id: {
      type: "integer",
    },
    nome: {
      type: "string",
      description: "Nome da referida pessoa",
    },
    email: {
      type: "string",
      description: "Endereço eletrônico da pessoa",
    },
    telefone: {
      type: "string",
      description: "Endereço eletrônico da pessoa",
    },
    tags: {
      type: "array",
      items: {
        type: "string",
      },
    },
  },
  required: ["nome", "email"],
  example: {
    id: 5,
    nome: "Francis Ford Copolla",
    email: "copolla@hollywood.com",
    telefone: "001-124-2111",
    organizacao: null,
    tags: ["cinema", "trabalho"],
  },
};
