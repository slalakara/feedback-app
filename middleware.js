import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('accessToken')?.value;

  if (!token && !request.url.includes('/login')) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (request.url.includes('/login') && token) {
    return NextResponse.redirect('/');
  }
}

export const config = {
  matcher: ['/', '/protected-route', '/login'],
};
