import express from 'express';

import { allUsuarios, usuarioById, createUsuarios, updateUsuario, deleteUsuario } from '../controllers/usuariosController.js';
const usuariosRouter = express.Router();

usuariosRouter.post('/usuario', allUsuarios)

usuariosRouter.get('/usuarios', usuarioById)

usuariosRouter.get('/usuarios/:id', createUsuarios)

usuariosRouter.put('/usuarios/:id', updateUsuario)

usuariosRouter.delete('/usuarios/:id', deleteUsuario)

export { usuariosRouter }