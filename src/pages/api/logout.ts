// pages/api/logout.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set cookie 'token' dengan nilai kosong untuk menghapusnya
  res.setHeader('Set-Cookie', serialize('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',  // Hanya set secure cookie jika di production
    maxAge: -1,  // Mengatur cookie kedaluwarsa segera
    path: '/',   // Aplikasikan di seluruh aplikasi
  }));

  // Mengirim respons sukses
  res.status(200).json({ message: 'Logout berhasil' });
}
