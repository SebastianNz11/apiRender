import { Libro } from "../models/libros.models.js";

//FUNCION PARA TRAER INFORMACION DE LIBROS
export const getLibros = async (req, res) => {
  try {
    const libros = await Libro.findAll();
    res.json(libros);
  } catch (error) {
    res.status(500).json({ msg: "No se pudieron obtener libros" });
  }
};

//FUNCION PARA TRAER INFORMACION DE UN LIBROS
export const getLibrosById = async (req, res) => {
  try {
    const { id_libro } = req.params;
    const libros = await Libro.findOne({
      where: { id_libro },
    });
    if (!libros) {
      return res.status(404).json({ msg: "No se encontró el libro" });
    }
    res.json(libros);
  } catch (error) {
    res.status(500).json({ msg: "No se pudo obtener el libro" });
  }
};

//FUNCION PARA INSERTAR UN LIBRO
export const postLibro = async (req, res) => {
  try {
    const {
      nombreLibro,
      editorial,
      autor,
      genero,
      paisAutor,
      numeroPaginas,
      anioEdicion,
      precio,
    } = req.body;
    const libros = await Libro.create({
      nombreLibro,
      editorial,
      autor,
      genero,
      paisAutor,
      numeroPaginas,
      anioEdicion,
      precio,
    });
    res.json(libros);
  } catch (error) {
    res.status(500).json({ msg: "No se pudo agregar el libro" });
  }
};

//FUNCION PARA ACTUALIZAR UN LIBRO
export const putLibro = async (req, res) => {
  try {
    const { id_libro } = req.params;
    const {
      nombreLibro,
      editorial,
      autor,
      genero,
      paisAutor,
      numeroPaginas,
      anioEdicion,
      precio,
    } = req.body;
    const libros = await Libro.findByPk(id_libro);
    if (!libros) {
      return res.status(404).json({ msg: "No se encontro el libro" });
    }
    libros.nombreLibro = nombreLibro;
    libros.editorial = editorial;
    libros.autor = autor;
    libros.genero = genero;
    libros.paisAutor = paisAutor;
    libros.numeroPaginas = numeroPaginas;
    libros.anioEdicion = anioEdicion;
    libros.precio = precio;
    libros.save();
    res.status(200).json(libros);
  } catch (error) {
    res.status(500).json({ msg: "No se pudo actualizar el libro" });
  }
};

//FUNCION PARA ELIMINAR UN LIBRO
export const deleteLibro = async (req, res) => {
  try {
    const { id_libro } = req.params;
    const libros = await Libro.destroy({
      where: { id_libro },
    });
    if (!libros) {
      return res.json({ msg: "No se encontro el libro" });
    }
    res.status(200).json({ msg: "Se elimino el libro correctamente" });
  } catch (error) {
    res.status(500).json({ msg: "No se pudo eliminar el libro" });
  }
};
