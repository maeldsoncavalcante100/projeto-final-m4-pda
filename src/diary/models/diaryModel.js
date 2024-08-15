import { Schema, model } from "mongoose";


const moodEnum = ['happy', 'sad', 'angry', 'excited', 'anxious'];

const DiarySchema = new Schema(
  {
    date: {
      type: Date,
      required: [true, "Please enter the date of the entry"],
      default: Date.now, 
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
      trim: true, 
      required: [true, "Please enter your reflection"],
    },
    analysis: {
      type: String, 
    }
  },
  {
    timestamps: true, 
  }
);

const Diary = model("Diary", DiarySchema);

export default Diary;
