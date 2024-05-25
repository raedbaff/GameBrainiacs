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
    unique: [true, 'Username must be unique'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 letters or digits long'],
  },
  profilePicture: {
    type: String,
    required: false,
  },
});
const User = models.User || model('User', MongooseUser);
export default User;
