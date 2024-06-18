import mongoose, { model, models, Schema } from 'mongoose';

const quizzSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answers: {
    type: [
      {
        text: String,
        correct: Boolean,
      },
    ],
    required: true,
  },
});

const Quizz = models.Quizz | model('Quizz', quizzSchema);
export default Quizz;
