import { NextResponse } from 'next/server';
import User from '../../models/user';
import { connectToDB } from '../../utils/db';

export const GET = async (req, res) => {
  const url = new URL(req.url);
  const searchparam = new URLSearchParams(url.searchParams);
  const email = searchparam.get('email');
  try {
    await connectToDB();
    const user = await User.findOne({ email }).lean();

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    const { password, ...userWithoutPassword } = user;

    return NextResponse.json({ user: userWithoutPassword });
  } catch (error) {
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
};
