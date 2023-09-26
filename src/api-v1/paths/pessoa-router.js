import express from "express";
import pessoaModel from "../models/pessoa-model";

const pessoaRouter = express.Router();

pessoaRouter.get("/", listaPessoas);

function listaPessoas(req, res, next) {
  pessoaModel.lista({}, (err, lista) => {
    if (!err) {
      res.json(lista);
    } else {
      res.status(400).send(err.message);
    }
  });
}

export default pessoaRouter;
