'use client';
import PopularQuizzes from '@/components/PopularQuizzes';
import ScrollUp from '@/components/Common/ScrollUp';
import Hero from '@/components/Hero';
import Quiz from '@/components/Quiz';
export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <PopularQuizzes />
      <Quiz />
    </>
  );
}
