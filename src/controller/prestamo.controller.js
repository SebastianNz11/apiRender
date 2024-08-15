import { Prestamo } from "../models/prestamo.model.js";

//FUNCION PARA TRAER INFORMACION DE PRESTAMOS
export const getPrestamos = async (req, res) => {
  try {
    const prestamos = await Prestamo.findAll();
    res.status(200).json(prestamos);
  } catch (error) {
    res.status(500).json({ msg: "No se pudieron obtener prestamos" });
  }
};

//FUNCION PARA TRAER INFORMACION DE UN PRESTAMO
export const getPrestamoById = async (req, res) => {
  try {
    const { id_pedido } = req.params;
    const prestamos = await Prestamo.findOne({
      where: { id_pedido },
    });
    if (!prestamos) {
      return res.status(404).json({ msg: "No se encontró el prestamo" });
    }
    res.status(200).json(prestamos);
  } catch (error) {
    res.status(500).json({ msg: "No se pudo obtener el prestamo" });
  }
};

//FUNCION PARA INSERTAR UN PRESTAMO
export const postPrestamo = async (req, res) => {
  try {
    const {
      id_libro,
      id_usuario,
      fechaSalida,
      fechaMaximaDevolucion,
      fechaDevolucion,
    } = req.body;
    const prestamos = await Prestamo.create({
      id_libro,
      id_usuario,
      fechaSalida,
      fechaMaximaDevolucion,
      fechaDevolucion,
    });
    res.status(200).json(prestamos);
  } catch (error) {
    res.status(500).json({ msg: "No se pudo agregar el prestamo" });
  }
};

//FUNCION PARA ACTUALIZAR UN PRESTAMO
export const putPrestamo = async (req, res) => {
  try {
    const { id_pedido } = req.params;
    const {
      id_libro,
      id_usuario,
      fechaSalida,
      fechaMaximaDevolucion,
      fechaDevolucion,
    } = req.body;
    const prestamos = await Prestamo.findByPk(id_pedido);
    if (!prestamos) {
      return res.status(404).json({ msg: "No se encontro el prestamo" });
    }
    prestamos.id_libro = id_libro;
    prestamos.id_usuario = id_usuario;
    prestamos.fechaSalida = fechaSalida;
    prestamos.fechaMaximaDevolucion = fechaMaximaDevolucion;
    prestamos.fechaDevolucion = fechaDevolucion;
    prestamos.save();
    res.status(200).json(prestamos);
  } catch (error) {
    res.status(500).json({ msg: "No se pudo actualizar el prestamo" });
  }
};

//FUNCION PARA ELIMINAR UN PRESTAMO
export const deletePrestamo = async (req, res) => {
  try {
    const { id_pedido } = req.params;
    const prestamo = await Prestamo.destroy({
      where: { id_pedido },
    });
    if (!prestamo) {
      return res.json({ msg: "No se encontro el prestamo" });
    }
    res.status(200).json({ msg: "Se elimino el prestamo correctamente" });
  } catch (error) {
    res.status(500).json({ msg: "No se pudo eliminar el prestamo" });
  }
};
