const insere = () => {};
const lista = (params, callback) => {
  const objFake = [
    {
      id: 5,
      nome: "Francis Ford Copolla",
      email: "copolla@hollywood.com",
      telefone: "001-124-2111",
      organizacao: null,
      tags: ["cinema", "trabalho"],
    },
  ];

  const lista = objFake;
  const err = null;
  callback(err, lista);
};
const altera = () => {};
const exclui = () => {};

export default {
  insere,
  lista,
  altera,
  exclui,
};
