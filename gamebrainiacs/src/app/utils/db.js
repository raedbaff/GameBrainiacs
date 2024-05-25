import mongoose from 'mongoose';
let connected = false;
export const connectToDB = async () => {
  mongoose.set('strictQuery', true);
  if (connected) {
    console.log('Already connected to database');
    return;
  } else {
    try {
      await mongoose.connect(process.env.DB_URL);
      connected = true;
      console.log('Successfully connected to DB');
    } catch (error) {
      console.log(error);
    }
  }
};
