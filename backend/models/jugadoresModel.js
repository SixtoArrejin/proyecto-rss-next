//importamos la BD
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const Jugadores = db.define("jugadores", {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  nombre_apellido: { type: DataTypes.STRING },
  altura: { type: DataTypes.FLOAT },
  numero_camiseta: { type: DataTypes.INTEGER },
  posicion: { type: DataTypes.STRING },
  edad: { type: DataTypes.INTEGER },
  goles: { type: DataTypes.INTEGER },
  descripcion: { type: DataTypes.STRING },
  imagen: { type: DataTypes.STRING },
});

export default Jugadores;
