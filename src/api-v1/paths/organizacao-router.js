import express from "express";

const organizacaoRouter = express.Router();

organizacaoRouter.use("/", (req, res, next) => {
  res.send("ENDPOINT ORGANIZAçÂO");
});

export default organizacaoRouter;
