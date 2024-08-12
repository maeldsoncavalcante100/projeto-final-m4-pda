//dicasController
const mongoose = require('mongoose');
const User = mongoose.model('Usuario');


exports.getSaudeMentalDicas = (req, res) => {
    const user = new User();
    res.json(user.getSaudeMentalDicas());
};

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


exports.getUsers = async (req, res) => {
    try {
        const options = {
            page: parseInt(req.query.page, 10) || 1,
            limit: parseInt(req.query.limit, 10) || 10
        };
        const users = await User.paginate({}, options);
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.json({ message: 'Usuário deletado com sucesso' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
