import React from 'react';
import SectionTitle from '../Common/SectionTitle';
import Image from 'next/image';

const Quiz = () => {
  return (
    <section id="quiz" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Most popular quizzes"
                paragraph="These are the most popular quizzes for the most popular games out there, Complete the quiz and climb up the leaderboard"
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
