import { Schema, model } from 'mongoose';

const livroSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Livro = model('Livro', livroSchema);

export default Livro;
