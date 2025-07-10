import express from "express";
import {
  getUsuarios,
  createOrUpdateUsuario,
  deleteUsuario,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/usuarios", getUsuarios);
router.post("/usuarios", createOrUpdateUsuario);
router.delete("/usuarios/:id", deleteUsuario);

export default router;
