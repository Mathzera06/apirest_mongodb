import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router.get("/livros", LivroController.listarLivros);

router.get("/livros/busca", LivroController.listarLivroPorEditora);

router.post("/livros", LivroController.cadastrarLivro);

router.put("/livros/:id", LivroController.atualizarLivro);

router.get("/livros/:id", LivroController.listarLivroPorId);

router.delete("/livros/:id", LivroController.deletarLivro);
export default router;