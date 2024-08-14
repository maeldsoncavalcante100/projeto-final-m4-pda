import express from 'express';
 
const router = express.Router();
import { createSatisfaction, getSatisfaction, getSatisfactionById, updateSatisfaction, deleteSatisfaction } from '../controllers/satisfactionController.js';

// Rotas CRUD
router.post('/satisfactions', createSatisfaction);
router.get('/satisfactions', getSatisfaction);
router.get('/satisfactions/:id', getSatisfactionById);
router.put('/satisfactions/:id', updateSatisfaction);
router.delete('/satisfactions/:id', deleteSatisfaction);

export {router}