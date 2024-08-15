import { Router } from "express";
import {
  getLibros,
  getLibrosById,
  postLibro,
  putLibro,
  deleteLibro,
} from "../controller/libro.controller.js";

const routes = Router();

routes.get("/libros", getLibros);
routes.get("/libros/:id_libro", getLibrosById);
routes.post("/libros", postLibro);
routes.put("/libros/:id_libro", putLibro);
routes.delete("/libros/:id_libro", deleteLibro);

export default routes;
