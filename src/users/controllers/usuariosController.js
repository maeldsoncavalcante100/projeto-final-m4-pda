import Usuario from '../models/usuarios.js';


export const allUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
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

