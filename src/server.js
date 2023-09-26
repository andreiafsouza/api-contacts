import http from "http";
import express from "express";
import apiRouter from "./api-v1/api-router";
import bodyParser from "body-parser";

const app = express();

//associar json com objecto req.body
app.use(bodyParser.json());

//associa os parametros de url e body com formato urlEncoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1", apiRouter);

app.use("/", (req, res, next) => {
  res.send("-- API Contatos --");
});

const porta = 5500;
http.createServer(app).listen(porta, () => {
  console.log(`Servidor rodando na porta ${5500}`);
});
