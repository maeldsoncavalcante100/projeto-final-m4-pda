import { Schema, model } from "mongoose";

// Enum para estados emocionais
const moodEnum = ['happy', 'sad', 'angry', 'excited', 'anxious'];

// Define o esquema para o modelo de entradas do diário
const DiarySchema = new Schema(
  {
    date: {
      type: Date,
      required: [true, "Please enter the date of the entry"],
      default: Date.now, // Define a data atual como padrão
    },
    mood: {
      type: String,
      required: [true, "Please select a mood"],
      enum: moodEnum,
    },
    stressLevel: {
      type: Number,
      min: [0, "Stress level must be between 0 and 10"],
      max: [10, "Stress level must be between 0 and 10"],
    },
    anxietyLevel: {
      type: Number,
      min: [0, "Anxiety level must be between 0 and 10"],
      max: [10, "Anxiety level must be between 0 and 10"],
    },
    reflection: {
      type: String,
      trim: true, // Remove espaços em branco no início e no fim
      required: [true, "Please enter your reflection"],
    },
    analysis: {
      type: String, // Análise de texto para identificar mudanças emocionais
    }
  },
  {
    timestamps: true, // Adiciona campos de data de criação e atualização automaticamente
  }
);

const Diary = model("Diary", DiarySchema);

export default Diary;
