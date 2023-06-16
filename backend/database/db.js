import { Sequelize } from "sequelize";

const db = new Sequelize("Seleccion", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
