import express from "express";
import cors from 'cors'
import { sequelize } from "./database/database.js";
import routesLibros from "./routes/libro.routes.js";
import routesPrestamos from "./routes/prestamo.routes.js";
import morgan from "morgan";
import "./models/libros.models.js";
import "./models/prestamo.model.js";
import "dotenv/config";

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(routesLibros);
app.use(routesPrestamos);
app.use(
  cors({
    origin: '*',
    methods: ["GET", "PATCH", "POST", "DELETE"],
  })
);

const main = () => {
  app.listen(process.env.PORT, async () => {
    try {
      await sequelize.sync();
      console.log("Conexion realizada con exito.");
      console.log("Escuchando en el puerto " + (process.env.PORT || 4001));
    } catch (error) {
      console.error("No se pudo conectar a la base de datos:", error);
    }
  });
};

main();
