import db from "../database/db.js";
//importamos sequelize
import {DataTypes} from "sequelize";

const LineaCompras = db.define('linea_compras', {
    id_compra: {type: DataTypes.INTEGER},
    linea: {type: DataTypes.INTEGER},
    id_producto: {type: DataTypes.INTEGER},
    cantidad: {type: DataTypes.INTEGER},
    precio_unitario: {type: DataTypes.DECIMAL(12,2)},
})

export default LineaCompras