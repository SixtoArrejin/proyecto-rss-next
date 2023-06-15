import express from 'express'
import { createProducto, deleteProducto, getAll, getProducto, updateProducto } from '../controllers/productosController.js'

const router = express.Router()

router.get('/', getAll)
router.get('/:id', getProducto)
router.post('/', createProducto)
router.put('/:id', updateProducto)
router.delete('/:id', deleteProducto)

export default router