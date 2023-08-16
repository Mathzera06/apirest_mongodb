import express from "express";
import AutorControllers from "../controllers/autoresController.js";
import paginar from "../middlewares/paginar.js";

const router = express.Router();

router.get("/autores", AutorControllers.listarAutores, paginar);

router.post("/autores", AutorControllers.cadastrarAutor);

router.put("/autores/:id", AutorControllers.atualizarAutor);

router.get("/autores/:id", AutorControllers.listarAutorPorId);

router.delete("/autores/:id", AutorControllers.excluirAutor);
export default router;