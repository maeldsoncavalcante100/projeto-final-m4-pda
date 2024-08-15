import { Schema, model } from "mongoose";

const SatisfactionSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, "User ID is required"]
    },
    date: {
      type: Date,
      default: Date.now,
    },
    overallSatisfaction: {
      type: Number,
      min: [1, "Satisfaction must be between 1 and 5"],
      max: [5, "Satisfaction must be between 1 and 5"],
      required: [true, "Overall satisfaction is required"]
    },
    feedback: {
      type: String,
      trim: true,
      required: false
    }
  },
  {
    timestamps: true,
  }
);

const Satisfaction = model("Satisfaction", SatisfactionSchema);

export default Satisfaction;



