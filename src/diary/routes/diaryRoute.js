import express from 'express';
import DiaryControllers from '../controllers/diaryController.js';

const diaryRouter = express.Router();
const diaryControllers = new DiaryControllers();


diaryRouter.get('/', (req, res) => diaryControllers.getDiaries(req, res));

diaryRouter.get('/:id', (req, res) => diaryControllers.getDiary(req, res));

diaryRouter.post('/', (req, res) => diaryControllers.createDiary(req, res));

diaryRouter.put('/:id', (req, res) => diaryControllers.updateDiary(req, res));

diaryRouter.delete('/:id', (req, res) => diaryControllers.deleteDiary(req, res));

export default diaryRouter;



