import express from 'express'
import cors from 'cors'
//Importamos la conexion a la BD
import db from "./database/db.js"
//importamos nuestro enrutador
import Compras from "./routes/compras.js"
import LineaCompras from "./routes/lineaCompras.js"
import Productos from "./routes/productos.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use('/compras', Compras)
app.use('/lineacompras', LineaCompras)
app.use('/compras', Compras)
app.use('/productos', Productos)


try {
    await db.authenticate()
    console.log('Conexion exitosa a la BD')
} catch (error) {
    console.log(`El error de la conexion es: ${error}`)
}

/* app.get('/', (req, res)=> {
    res.send('Hola Mundo')
}) */

app.listen(8000, () =>{
    console.log('Server corriendo en http://localhost:8000/')
})