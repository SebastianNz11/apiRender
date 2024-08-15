import { sequelize } from "../database/database.js";
import { Libro } from "./libros.models.js";
import { DataTypes } from "sequelize";

export const Prestamo = sequelize.define("prestamos", {
  id_pedido: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_libro: {
    type: DataTypes.INTEGER,
  },
  id_usuario: {
    type: DataTypes.INTEGER,
  },
  fechaSalida: {
    type: DataTypes.DATE,
  },
  fechaMaximaDevolucion: {
    type: DataTypes.DATE,
  },
  fechaDevolucion: {
    type: DataTypes.DATE,
  },
});

Prestamo.belongsTo(Libro, {
  foreignKey: "id_libro",
});
