import express from 'express';

import { allUsuarios, usuarioById, createUsuarios, updateUsuario, deleteUsuario } from '../controllers/usuariosController.js';
const usuariosRouter = express.Router();

usuariosRouter.get('/usuarios', allUsuarios)

usuariosRouter.get('/usuarios/:id', usuarioById)

usuariosRouter.post('/usuario', createUsuarios)

usuariosRouter.put('/usuarios/:id', updateUsuario)

usuariosRouter.delete('/usuarios/:id', deleteUsuario)

export { usuariosRouter }