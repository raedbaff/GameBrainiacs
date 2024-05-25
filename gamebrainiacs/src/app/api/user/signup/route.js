import { connectToDB } from '../../../utils/db';
import User from '@/app/models/user';
import bcrypt from 'bcrypt';
export const POST = async (req, res) => {
  try {
    await connectToDB();
    const { username, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return new Response(JSON.stringify(newUser), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(error, { status: 500 });
  }
};
