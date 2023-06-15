/* import express from 'express'
import { createCompra, deleteCompra, getAll, getCompra, updateCompra } from '../controllers/comprasController.js'
import { createLineaCompra, deleteLineaCompra, getAllLineaCompras, getLineaCompra, updateLineaCompra } from '../controllers/lineaComprasController.js'
import { createProducto, deleteProducto, getAllProductos, getProducto, updateProducto } from '../controllers/productosController.js'

const router = express.Router()

router.get('/getallcompras', getAll)
router.get('/getcompra/:id', getCompra)
router.post('/createcompra', createCompra)
router.put('/updatecompra/:id', updateCompra)
router.delete('/deletecompra/:id', deleteCompra)

router.get('/getalllineacompras', getAllLineaCompras)
router.get('/getlineacompra/:id', getLineaCompra)
router.post('/createlineacompra', createLineaCompra)
router.put('/updatelineacompra/:id', updateLineaCompra)
router.delete('/deletelineacompra/:id', deleteLineaCompra)

router.get('/getallproductos', getAllProductos)
router.get('/getproducto/:id', getProducto)
router.post('/createproducto', createProducto)
router.put('/updateproducto/:id', updateProducto)
router.delete('/deleteproducto/:id', deleteProducto)

export default router */