const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

module.exports = {
    async insert (req, res) {
        const usuarios = await Usuario.create(req.body);
        return res.json(usuarios);
    },
    async index (req, res) {
        const {page} = req.query;

        const usuarios = await Usuario.paginate({}, { page, limit: 5});

        return res.json(usuarios);
    },

    async details (req, res) {
        const usuarios = await Usuario.findById(req.params.id);
        return res.json(usuarios);
    },
    async update (req, res){
        const usuarios = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true});

        return res.json(usuarios);
    },
    async delete (req, res) {
        await Usuario.findByIdAndRemove(req.params.id);

        return res.send();
    }
}