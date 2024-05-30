import CredentialsProvider from 'next-auth/providers/credentials';
import User from '../../../models/user';
import NextAuth from 'next-auth';
import bcrypt from 'bcrypt';
import { connectToDB } from '@/app/utils/db';

const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/signin',
    signOut: '/signin',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: {},
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        await connectToDB();
        const user = await User.findOne({ email: credentials.email });

        if (user) {
          const correctPassword = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (correctPassword) {
            return {
              id: user._id,
              email: user.email,
              name: user.username,
              image: user.profilePicture ?? '',
            };
          }
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    // Using the `...rest` parameter to be able to narrow down the type based on `trigger`
    async jwt({ token, trigger, session }) {
      if (trigger === 'update' && session?.name) {
        // Note, that `session` can be any arbitrary object, remember to validate it!
        token.name = session.name;
      }
      return token;
    },
  },
});

export { handler as GET, handler as POST };
