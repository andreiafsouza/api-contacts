import express from "express";
import pessoaModel from "../models/pessoa-model";
import { validate } from "jsonschema";
import { pessoaSchema } from "../models/schemas";

const pessoaRouter = express.Router();

pessoaRouter.get("/", listaPessoas);
pessoaRouter.post("/", inserePessoas);
pessoaRouter.put("/", alteraPessoas);
pessoaRouter.delete("/", excluiPessoas);

function listaPessoas(req, res, next) {
  pessoaModel.lista({}, (err, lista) => {
    if (!err) {
      res.json(lista);
    } else {
      res.status(400).send(err.message);
    }
  });
}

function inserePessoas(req, res, next) {
  const validateSchema = validate(req.body, pessoaSchema);

  if (validateSchema.errors.length > 0) {
    res.status(400).send("Erro no formato do objecto JSON");
  } else {
    pessoaModel.insere(req.body, (err, objNovo) => {
      if (!err) {
        res.json(objNovo);
      } else {
        res.status(400).send(err.message);
      }
    });
  }
}

function alteraPessoas(req, res, next) {
  pessoaModel.altera(req.body, (err, objNovo) => {
    if (!err) {
      res.json(objNovo);
    } else {
      res.status(400).send(err.message);
    }
  });
}

function excluiPessoas(req, res, next) {
  pessoaModel.exclui(req.body, (err, objNovo) => {
    if (!err) {
      res.json(objNovo);
    } else {
      res.status(400).send(err.message);
    }
  });
}

export default pessoaRouter;
