import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    nome: {
        type: String,
        required: true,
        uppercase: true,
        minlength: 3,
        maxlength: 100
    },
    matricula: {
        type: Number,
        required: true,
        min: 1,
        max: 9999,
        unique: true
    },
    ativo: {
        type: Boolean,
        default: true,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    registro: {
        type: Date,
        default: Date.now
    }
});


const Usuario = model('Usuario', UserSchema);

export default Usuario;