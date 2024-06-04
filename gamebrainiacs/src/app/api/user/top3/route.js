import { NextResponse } from 'next/server';
import User from '../../../models/user';
import { connectToDB } from '../../../utils/db';

export const GET = async (req, res) => {
  try {
    await connectToDB();
    const users = await User.find({});

    if (users.length === 0) {
      return NextResponse.json({ error: 'No Users Found' }, { status: 404 });
    }
    const sortedUsers = users.sort((a, b) => b.score - a.score);
    const top3Users = sortedUsers.slice(0, 3);
    const usersWithoutPassword = top3Users.map(user => {
      const { password, ...userWithoutPassword } = user.toObject();
      return userWithoutPassword;
    });

    return NextResponse.json({ users: usersWithoutPassword });
  } catch (error) {
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
};
