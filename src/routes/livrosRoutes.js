import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.listaLivros);
routes.get("/livros/:id", LivroController.listaLivroId);
routes.post("/livros/", LivroController.cadastraLivro);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.deletaLivro);

export default routes;