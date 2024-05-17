"use client";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Quiz from "@/components/Quiz";
export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Brands />
      <Quiz />
    </>
  );
}
