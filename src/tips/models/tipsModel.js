//dicasModel
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
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

UserSchema.methods.getSaudeMentalDicas = function () {
    return [
        "Lembre-se de respirar fundo e fazer uma pausa quando necessário.",
        "Reserve um tempo para relaxar e desconectar-se das tarefas diárias.",
        "Mantenha uma rotina de sono consistente para melhorar seu bem-estar geral."
    ];
};

mongoose.model('Usuario', UserSchema);
