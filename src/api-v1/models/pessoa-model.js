import db from "../utils/db";

const insere = (obj, callback) => {
  db.pessoasDB.insert(obj, callback);
};

const lista = (params, callback) => {
  db.pessoasDB.find({}, callback);
};

const altera = () => {};

const exclui = (obj, callback) => {
  db.pessoasDB.remove(obj, callback);
};

export default {
  insere,
  lista,
  altera,
  exclui,
};
