import Usuario from '../models/usuarios.js';

export const allUsuarios = async (req, res) => {
  try {
    const usuarios = await Livro.find();
    res.send(usuarios);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const usuarioById = async (req, res) => {
  try {
    const usuarios = await Usuario.findById(req.params.id);
    if (!Usuario) return res.status(404).send('Usuario não encontrado');
    res.send(usuarios);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const createUsuarios = async (req, res) => {
  try {
    const usuario = new Usuario(req.body);
    const newUsuario = await usuario.save();
    res.send(newUsuario);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const updateUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!usuario) return res.status(404).send('Usuario não encontrado');
    res.send(usuario);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const deleteUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuario) return res.status(404).send('Usuario não encontrado');
    res.send(usuario);
  } catch (err) {
    res.status(500).send(err);
  }
};






/**import { model } from 'mongoose';
import Usuario from model('Usuario');

export async function insert(req, res) {
    const usuarios = await Usuario.create(req.body);
    return res.json(usuarios);
}
export async function index(req, res) {
    const { page } = req.query;

    const usuarios = await Usuario.paginate({}, { page, limit: 5 });

    return res.json(usuarios);
}
export async function details(req, res) {
    const usuarios = await Usuario.findById(req.params.id);
    return res.json(usuarios);
}
export async function update(req, res) {
    const usuarios = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(usuarios);
}
export async function deleteUser(req, res) {
    await Usuario.findByIdAndRemove(req.params.id);

    return res.send();
}**/