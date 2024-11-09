import { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set cookie 'token' with an empty value to remove it
  res.setHeader('Set-Cookie', serialize('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',  // Only set secure cookies in production
    maxAge: -1,  // Immediately expire the cookie
    path: '/',   // Apply it across the whole app
  }));

  // Send a success response
  res.status(200).json({ message: 'Logout successful' });
}
