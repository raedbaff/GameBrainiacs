'use client';
import Brands from '@/components/Brands';
import ScrollUp from '@/components/Common/ScrollUp';
import Hero from '@/components/Hero';
import Quiz from '@/components/Quiz';
import { useSession } from 'next-auth/react';
export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      <ScrollUp />
      <Hero />
      <Brands />
      <Quiz />
    </>
  );
}
