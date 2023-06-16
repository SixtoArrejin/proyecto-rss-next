import { Sequelize } from "sequelize";

const db = new Sequelize("Seleccion", "root", "Arrejin_468", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
