import { connectToDB } from '../../../utils/db';
import User from '../../../models/user';
import bcrypt from 'bcrypt';
export const POST = async (req, res) => {
  try {
    await connectToDB();
    const { username, email, password } = await req.json();
    const userExists = await User.findOne({ email });
    if (userExists) {
      return new Response('User Already exists', { status: 403 });
    }

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
