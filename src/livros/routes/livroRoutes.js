import express from 'express';
import { 
  allLivros, 
  livroById, 
  createLivros, 
  updateLivro, 
  deleteLivro 
} from '../controller/livroController.js';

const router = express.Router();

router.post('/livros', createLivros);
router.get('/livros', allLivros);
router.get('/livros/:id', livroById);
router.put('/livros/:id', updateLivro);
router.delete('/livros/:id', deleteLivro);

export default router;
