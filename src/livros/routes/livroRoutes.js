import express from 'express';

import { 
  allLivros, 
  livroById, 
  createLivros, 
  updateLivro, 
  deleteLivro 
} from '../controller/livroController.js';

const routerLivro = express.Router();


routerLivro.get('/livros', allLivros);
routerLivro.get('/livros/:id', livroById);
routerLivro.post('/livro', createLivros);
routerLivro.put('/livros/:id', updateLivro);
routerLivro.delete('/livro/:id', deleteLivro);

export { routerLivro };
