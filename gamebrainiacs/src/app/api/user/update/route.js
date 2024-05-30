import { NextResponse } from 'next/server';
import { connectToDB } from '../../../utils/db';
import User from '../../../models/user';

export const PUT = async (req, res) => {
  try {
    await connectToDB();
    const { email, username, age, bio } = await req.json();
    console.log(email, username, age, bio);

    const response = await User.findOneAndUpdate(
      { email: email },
      {
        $set: {
          email,
          username,
          age,
          bio,
        },
      },
      { returnOriginal: false }
    );

    if (!response) {
      return NextResponse.json({ error: 'User not found', status: 404 });
    }

    const updatedUser = await User.findOne({ email });

    return NextResponse.json({
      message: 'User updated successfully',
      user: updatedUser,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong', status: 500 });
  }
};
