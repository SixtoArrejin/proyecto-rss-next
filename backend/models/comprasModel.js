//importamos la BD
import db from "../database/db.js";
//importamos sequelize
import {DataTypes} from "sequelize";

const Compras = db.define('compras', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    fecha: {type: DataTypes.TIME},
    proveedor: {type: DataTypes.STRING},
})

export default Compras
/* export const LineaCompras = db.define('linea_compras', {
    id_compra: {type: DataTypes.INTEGER},
    linea: {type: DataTypes.INTEGER},
    id_producto: {type: DataTypes.INTEGER},
    cantidad: {type: DataTypes.INTEGER},
    precio_unitario: {type: DataTypes.DECIMAL(12,2)},
})

export const LineaVentas = db.define('linea_ventas', {
    id_venta: {type: DataTypes.INTEGER},
    linea: {type: DataTypes.INTEGER},
    id_producto: {type: DataTypes.INTEGER},
    cantidad: {type: DataTypes.INTEGER},
    precio_unitario: {type: DataTypes.DECIMAL(12,2)},
})

export const Productos = db.define('productos', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    nombre: {type: DataTypes.STRING(20)},
    stock: {type: DataTypes.INTEGER},
    precio: {type: DataTypes.DECIMAL(12,2)},
    categoria: {type: DataTypes.STRING(20)},
    fecha_actualizacion: {type: DataTypes.TIME},
})

export const Ventas = db.define('ventas', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    fecha: {type: DataTypes.TIME},
    cliente: {type: DataTypes.STRING(50)},
}) */
