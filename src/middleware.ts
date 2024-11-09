import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // List of protected paths
  const protectedPaths = ['/dashboard', '/profile', '/'];

  // Check if the request URL matches any protected path
  const isProtected = protectedPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  // If the path is protected, check for a valid token
  if (isProtected) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,  // Ensure NEXTAUTH_SECRET is set in your environment
    });

    // If no token is found, redirect to the login page
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

// Define the paths that should be protected by this middleware
export const config = {
  matcher: ['/dashboard', '/profile', '/'],
};
