import Livro from '../models/livroModel.js';

export const allLivros = async (req, res) => {
  try {
    const livros = await Livro.find();
    res.send(livros);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const livroById = async (req, res) => {
  try {
    const livros = await Livro.findById(req.params.id);
    if (!Livro) return res.status(404).send('Livro não encontrado');
    res.send(livros);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const createLivros = async (req, res) => {
  try {
    const livro = new Livro(req.body);
    const newLivro = await livro.save();
    res.send(newLivro);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const updateLivro = async (req, res) => {
  try {
    const livro = await Livro.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!livro) return res.status(404).send('Livro não encontrado');
    res.send(livro);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const deleteLivro = async (req, res) => {
  try {
    const livro = await Livro.findByIdAndDelete(req.params.id);
    if (!livro) return res.status(404).send('Livro não encontrado');
    res.send(livro);
  } catch (err) {
    res.status(500).send(err);
  }
};
