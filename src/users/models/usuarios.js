import mongoose, { Schema, model } from 'mongoose';
//import mongoosePaginate from 'mongoose-paginate';

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
        cidade: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 100
        },
        estado: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 2
        }
    },
    registro: {
        type: Date,
        default: Date.now
    }
});

//UserSchema.plugin(mongoosePaginate);

const Usuario = model('Usuario', UserSchema);

export default Usuario;




/**import SchemaModel mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

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



const Usuario = model('Usuario', UserSchema);
export default Usuario;
UserSchema.plugin(mongoosePaginate);
**/