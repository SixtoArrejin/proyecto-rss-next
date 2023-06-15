//Importamos el modelo
import LineaCompras from "../models/lineaComprasModel.js"


//Metodos para el CRUD LineaCompras//

//Mostrar todos los registros
export const getAll= async (req, res) => {
  try {
    const lineacompras = await LineaCompras.findAll();
    res.json(lineacompras);
  } catch (error) {
    res.json({ messaje: error.messaje });
  }
};

//Mostrar un registro
export const getLineaCompra = async (req, res) => {
  try {
    const lineacompras = await LineaCompras.findAll({
      where: { id: req.params.id },
    });
    res.json(lineacompras[0]);
  } catch (error) {
    res.json({ messaje: error.messaje });
  }
};

//Crear blog
export const createLineaCompra = async (req, res) => {
  try {
    await LineaCompras.create(req.body);
    res.json({
      messaje: "Linea de compra creada correctamente!",
    });
  } catch (error) {
    res.json({ messaje: error.messaje });
  }
};

//Actualizar blog
export const updateLineaCompra = async (req, res) => {
  try {
    await LineaCompras.update(req.body, { where: { id: req.params.id } });
    res.json({
      messaje: "Registro actualizado correctamente!",
    });
  } catch (error) {
    res.json({ messaje: error.messaje });
  }
};

//Eliminar un blog
export const deleteLineaCompra = async (req, res) => {
  try {
    await LineaCompras.destroy({ where: { id: req.params.id } });
    res.json({
      messaje: "Registro eliminado correctamente!",
    });
  } catch (error) {
    res.json({ messaje: error.messaje });
  }
};
