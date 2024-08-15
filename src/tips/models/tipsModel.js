import { Schema, model } from 'mongoose';

const dicasSchema = new Schema({

  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  category: {
    type: String,
    enum: ['General', 'Health', 'Productivity', 'Lifestyle'],
    default: 'General'
  },
  likes: {
    type: Number,
    default: 0
  }
});

const Dicas = model('Dicas', dicasSchema);

export default Dicas;

