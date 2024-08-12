const mongoose = require('mongoose')

const mongoosePaginate = require('mongoose-paginate')

const UserSchema = new mongoose.Schema({
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
        cidade: {
            type: String,
            require: true,
            minlength: 3,
            maxlength: 100
        },
        estado: {
            type: String,
            require: true,
            minlength: 2,
            maxlength: 2
        }
    },
    registro: {
        type: Date,
        default: Date.now
    }
});

UserSchema.plugin(mongoosePaginate);

mongoose.model('Usuario', UserSchema);