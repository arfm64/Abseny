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
        // Log input credentials for debugging
        console.log('Attempting login with credentials:', credentials);
        
        if (credentials?.email === 'superadmin@gmail.com' && credentials?.password === 'password') {
          return {
            id: '1',
            name: 'admin',
            email: 'superadmin@gmail.com',
          };
        }
        
        console.log('Login failed for:', credentials?.email);
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
        // Ensure the user object is passed correctly in the token
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // Attach the user object from the token to the session
      session.user = token;
      return session;
    },
  },
  // Ensure secret is properly set and use NEXTAUTH_SECRET in production
  secret: process.env.NEXTAUTH_SECRET,
};

const authHandler = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, authOptions);

export default authHandler;
