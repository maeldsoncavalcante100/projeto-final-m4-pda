import express from 'express';

import { 
    getSaudeMentalDicas, 
    createDicas, 
    getDicas, 
    getDicasById, 
    updateDicas,
    deleteDicas
} from '../controllers/tipsController.js';

const routerTips = express.Router();

routerTips.get('/dica', getSaudeMentalDicas);
routerTips.post('/dicas', createDicas);
routerTips.get('/dicas', getDicas);
routerTips.get('/dicas/:id', getDicasById);
routerTips.put('/dicas/:id',updateDicas);
routerTips.delete('/dicas/:id', deleteDicas);

export { routerTips };

