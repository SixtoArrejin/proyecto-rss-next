import express from "express";
import cors from "cors";
//Importamos la conexion a la BD
import db from "./database/db.js";
//importamos nuestro enrutador
import Jugadores from "./routes/jugadores.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/jugadores", Jugadores);

try {
  await db.authenticate();
  console.log("Conexion exitosa a la BD");
} catch (error) {
  console.log(`El error de la conexion es: ${error}`);
}

app.listen(8000, () => {
  console.log("Server escuchando en http://localhost:8000/");
});
