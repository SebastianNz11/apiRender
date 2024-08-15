import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

//MODELO PARA LIBRO
export const Libro = sequelize.define("libros", {
  id_libro: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombreLibro: {
    type: DataTypes.STRING,
  },

  editorial: {
    type: DataTypes.STRING,
  },
  autor: {
    type: DataTypes.STRING,
  },
  genero: {
    type: DataTypes.STRING,
  },
  paisAutor: {
    type: DataTypes.STRING,
  },
  numeroPaginas: {
    type: DataTypes.INTEGER,
  },
  anioEdicion: {
    type: DataTypes.DATE,
  },
  precio: {
    type: DataTypes.DECIMAL,
  },
});
