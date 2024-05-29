export { default } from 'next-auth/middleware';
export const config = {
  matcher: ['/', '/quizz', '/quizz/:path*', '/leaderboard'],
};
