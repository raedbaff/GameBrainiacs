import mongoose, { model, models, Schema } from 'mongoose';

const MongooseUser = new Schema({
  email: {
    type: String,
    required: [true, 'Email must be provided'],
    unique: [true, 'Email must be unique'],
  },
  username: {
    type: String,
    required: [true, 'Username must be provided'],
  },
  password: {
    type: String,
    required: false,
    minlength: [6, 'Password must be at least 6 letters or digits long'],
  },
  profilePicture: {
    type: String,
    required: false,
    default: '',
  },
  age: {
    type: Number,
    required: false,
  },
  bio: {
    type: String,
    required: false,
  },
  participatedQuizzes: {
    type: [String],
    required: false,
    default: [],
  },
  score: {
    type: Number,
    required: false,
    default: 0,
  },
  wrongAnswers: {
    type: Number,
    required: false,
    default: 0,
  },
  correctAnswers: {
    type: Number,
    required: false,
    default: 0,
  },
});
const User = models.User || model('User', MongooseUser);
export default User;
