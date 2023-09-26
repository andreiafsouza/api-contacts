import http from "http";
import express from "express";
import apiRouter from "./api-v1/api-router";

const app = express();

app.use("/api/v1", apiRouter);
app.use("/", (req, res, next) => {
  res.send("-- API Contatos --");
});

const porta = 5500;
http.createServer(app).listen(porta, () => {
  console.log(`Servidor rodando na porta ${5500}`);
});
