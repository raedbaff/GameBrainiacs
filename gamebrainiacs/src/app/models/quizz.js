import mongoose, { model, models, Schema } from 'mongoose';

const quizzSchema = new Schema({
  suggester: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
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
  accepted: {
    type: Boolean,
    default: false,
  },
});

const Quizz = models.Quizz || model('Quizz', quizzSchema);

export default Quizz;
