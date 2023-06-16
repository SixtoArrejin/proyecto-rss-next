//Importamos el modelo
import Jugadores from "../models/jugadoresModel.js";

//Metodos para el CRUD Jugadores//

//Mostrar todos los registros
export const getAll = async (req, res) => {
  try {
    const jugadores = await Jugadores.findAll();
    res.json(jugadores);
  } catch (error) {
    res.json({ messaje: error.messaje });
  }
};

//Mostrar un Jugador
export const getJugador = async (req, res) => {
  try {
    const jugadores = await Jugadores.findAll({
      where: { id: req.params.id },
    });
    res.json(jugadores[0]);
  } catch (error) {
    res.json({ messaje: error.messaje });
  }
};

/* //Agregar Jugador
export const createJugador = async (req, res) => {
  try {
    await Jugadores.create(req.body);
    res.json({
      messaje: "Jugador creada correctamente!",
    });
  } catch (error) {
    res.json({ messaje: error.messaje });
  }
};

//Actualizar Jugador
export const updateJugador = async (req, res) => {
  try {
    await Jugadores.update(req.body, { where: { id: req.params.id } });
    res.json({
      messaje: "Registro actualizado correctamente!",
    });
  } catch (error) {
    res.json({ messaje: error.messaje });
  }
};

//Eliminar un blog
export const deleteJugador = async (req, res) => {
  try {
    await Jugadores.destroy({ where: { id: req.params.id } });
    res.json({
      messaje: "Registro eliminado correctamente!",
    });
  } catch (error) {
    res.json({ messaje: error.messaje });
  }
};
 */
