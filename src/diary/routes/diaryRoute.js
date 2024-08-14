import express from 'express';
import DiaryControllers from '../controllers/diaryController.js';

const diaryRouter = express.Router();
const diaryControllers = new DiaryControllers();

// Rota para obter todas as entradas do diário
diaryRouter.get('/', (req, res) => diaryControllers.getDiaries(req, res));

// Rota para obter uma entrada específica por ID
diaryRouter.get('/:id', (req, res) => diaryControllers.getDiary(req, res));

// Rota para criar uma nova entrada do diário
diaryRouter.post('/', (req, res) => diaryControllers.createDiary(req, res));

// Rota para atualizar uma entrada existente
diaryRouter.put('/:id', (req, res) => diaryControllers.updateDiary(req, res));

// Rota para excluir uma entrada do diário
diaryRouter.delete('/:id', (req, res) => diaryControllers.deleteDiary(req, res));

export default diaryRouter;



