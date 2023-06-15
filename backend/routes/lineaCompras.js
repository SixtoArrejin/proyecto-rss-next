import express from 'express'
import { createLineaCompra, deleteLineaCompra, getAll, getLineaCompra, updateLineaCompra } from '../controllers/lineaComprasController.js'

const router = express.Router()

router.get('/', getAll)
router.get('/:id', getLineaCompra)
router.post('/', createLineaCompra)
router.put('/:id', updateLineaCompra)
router.delete('/:id', deleteLineaCompra)

export default router