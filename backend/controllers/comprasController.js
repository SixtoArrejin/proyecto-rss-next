//Importamos el modelo
import Compras from "../models/comprasModel.js"


//Metodos para el CRUD Compras//

//Mostrar todos los registros
export const getAll = async (req, res) => {
  try {
    const compras = await Compras.findAll();
    res.json(compras);
  } catch (error) {
    res.json({ messaje: error.messaje });
  }
};

//Mostrar un registro
export const getCompra = async (req, res) => {
  try {
    const compras = await Compras.findAll({
      where: { id: req.params.id },
    });
    res.json(compras[0]);
  } catch (error) {
    res.json({ messaje: error.messaje });
  }
};

//Crear blog
export const createCompra = async (req, res) => {
  try {
    await Compras.create(req.body);
    res.json({
      messaje: "Compra creada correctamente!",
    });
  } catch (error) {
    res.json({ messaje: error.messaje });
  }
};

//Actualizar blog
export const updateCompra = async (req, res) => {
  try {
    await Compras.update(req.body, { where: { id: req.params.id } });
    res.json({
      messaje: "Registro actualizado correctamente!",
    });
  } catch (error) {
    res.json({ messaje: error.messaje });
  }
};

//Eliminar un blog
export const deleteCompra = async (req, res) => {
  try {
    await Compras.destroy({ where: { id: req.params.id } });
    res.json({
      messaje: "Registro eliminado correctamente!",
    });
  } catch (error) {
    res.json({ messaje: error.messaje });
  }
};
