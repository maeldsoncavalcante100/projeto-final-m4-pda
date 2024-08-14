import express from 'express';

import { 
  allLivros, 
  livroById, 
  createLivros, 
  updateLivro, 
  deleteLivro 
} from '../controller/livroController.js';

const router = express.Router();


router.get('/livros', allLivros);
router.get('/livros/:id', livroById);
router.post('/livro', createLivros);
router.put('/livros/:id', updateLivro);
router.delete('/livro/:id', deleteLivro);

export { router };
