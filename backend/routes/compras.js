import express from 'express'
import { createCompra, deleteCompra, getAll, getCompra, updateCompra } from '../controllers/comprasController.js'

const router = express.Router()

router.get('/', getAll)
router.get('/:id', getCompra)
router.post('/', createCompra)
router.put('/:id', updateCompra)
router.delete('/:id', deleteCompra)

export default router