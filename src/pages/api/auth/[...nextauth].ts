import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (credentials?.email === 'superadmin@gmail.com' && credentials?.password === 'password') {
          return {
            id: '1',
            name: 'admin',
            email: 'superadmin@gmail.com',
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/login?error=Invalid credentials',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
};

// Definisikan NextAuth dalam variabel terlebih dahulu
const authHandler = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, authOptions);

// Ekspor handler sebagai default
export default authHandler;
