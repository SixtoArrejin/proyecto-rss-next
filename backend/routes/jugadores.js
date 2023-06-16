import express from "express";
import { getAll, getJugador } from "../controllers/jugadoresController.js";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getJugador);

export default router;
