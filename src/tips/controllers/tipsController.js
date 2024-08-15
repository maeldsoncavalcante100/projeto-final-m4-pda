import Dicas from '../models/tipsModel.js';

export const getSaudeMentalDicas = (req, res) => {
    res.json([
        "Respire fundo e faça uma pausa.",
        "Desconecte-se das tarefas por um tempo.",
        "Mantenha uma rotina de sono saudável."
    ]);
};

export const createDicas = async (req, res) => {
    const dicas = new Dicas(req.body);
    try {
        await dicas.save();
        res.status(201).json(dicas);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getDicas = async (req, res) => {
    try {
        const dicas = await Dicas.find();
        res.json(dicas);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getDicasById = async (req, res) => {
    try {
        const dicas = await Dicas.findById(req.params.id);
        if (dicas) {
            res.json(dicas);
        } else {
            res.status(404).json({ error: 'Usuário não encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateDicas = async (req, res) => {
    try {
        const dicas = await Dicas.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (dicas) {
            res.json(dicas);
        } else {
            res.status(404).json({ error: 'Usuário não encontrado' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const deleteDicas = async (req, res) => {
    try {
        const dicas = await Dicas.findByIdAndDelete(req.params.id);
        if (dicas) {
            res.json({ message: 'Usuário deletado com sucesso' });
        } else {
            res.status(404).json({ error: 'Usuário não encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

