import express from "express";
import loaders from "./loaders/index.js";

const app = express();

loaders.start();

app.get("/", (req, res) => {
  res.send("API funcionando");
});

app.listen(8000, () => {
  console.log("Servidor rodando na porta 8000");
});