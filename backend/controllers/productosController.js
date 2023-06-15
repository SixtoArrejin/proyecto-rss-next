//Importamos el modelo
import Productos from "../models/productosModel.js";

//Metodos para el CRUD Compras//

//Mostrar todos los registros
export const getAll = async (req, res) => {
  try {
    const productos = await Productos.findAll();
    res.json(productos);
  } catch (error) {
    res.json({ messaje: error.messaje });
  }
};

//Mostrar un registro
export const getProducto = async (req, res) => {
  try {
    const productos = await Productos.findAll({
      where: { id: req.params.id },
    });
    res.json(productos[0]);
  } catch (error) {
    res.json({ messaje: error.messaje });
  }
};

//Crear blog
export const createProducto = async (req, res) => {
  try {
    await Productos.create(req.body);
    res.json({
      messaje: "Producto creado correctamente!",
    });
  } catch (error) {
    res.json({ messaje: error.messaje });
  }
};

//Actualizar blog
export const updateProducto = async (req, res) => {
  try {
    await Productos.update(req.body, { where: { id: req.params.id } });
    res.json({
      messaje: "Registro actualizado correctamente!",
    });
  } catch (error) {
    res.json({ messaje: error.messaje });
  }
};

//Eliminar un blog
export const deleteProducto = async (req, res) => {
  try {
    await Productos.destroy({ where: { id: req.params.id } });
    res.json({
      messaje: "Registro eliminado correctamente!",
    });
  } catch (error) {
    res.json({ messaje: error.messaje });
  }
};
