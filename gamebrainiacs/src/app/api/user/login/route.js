import { connectToDB } from '../../../utils/db';
import User from '../../../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const POST = async (req, res) => {
  try {
    const { email, password } = await req.json();
    await connectToDB();
    const user = await User.findOne({ email });
    if (!user) {
      return new Response({ error: 'User not found' }, { status: 404 });
    }
    const comparedPassword = await bcrypt.compare(password, user.password);
    if (!comparedPassword) {
      return new Response({ error: 'Passwords do not match' }, { status: 401 });
    }
    const returnedUser = {
      _id: user._id,
      username: user.username,
      profilePicture: user.profilePicture,
    };
    // const userToken = jwt.sign(
    //   { id: user._id, username: user.username },
    //   'SECRET', // Ensure this is defined in your environment variables
    //   { expiresIn: '10s' }
    // );
    return new Response(JSON.stringify({ user: returnedUser }), {
      status: 200,
    });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
