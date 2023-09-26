import express from "express";
import pessoaRouter from "./paths/pessoa-router";
import organizacaoRouter from "./paths/organizacao-router";

const apiRouter = express.Router();

apiRouter.use("/pessoas", pessoaRouter);
apiRouter.use("/organizacoes", organizacaoRouter);
apiRouter.use("/", (req, res, next) => {
  res.send("api v1");
});

export default apiRouter;
