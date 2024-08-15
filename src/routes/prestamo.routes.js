import { Router } from "express";
import {
  getPrestamos,
  getPrestamoById,
  postPrestamo,
  putPrestamo,
  deletePrestamo,
} from "../controller/prestamo.controller.js";

const router = Router();

router.get("/prestamos", getPrestamos);
router.get("/prestamos/:id_pedido", getPrestamoById);
router.post("/prestamos", postPrestamo);
router.put("/prestamos/:id_pedido", putPrestamo);
router.delete("/prestamos/:id_pedido", deletePrestamo);

export default router;
