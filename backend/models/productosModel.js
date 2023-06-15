//importamos la BD
import db from "../database/db.js";
//importamos sequelize
import {DataTypes} from "sequelize";

const Productos = db.define('productos', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    nombre: {type: DataTypes.STRING(20)},
    stock: {type: DataTypes.INTEGER},
    precio: {type: DataTypes.DECIMAL(12,2)},
    categoria: {type: DataTypes.STRING(20)},
    fecha_actualizacion: {type: DataTypes.TIME},
})

export default Productos;