import React from 'react';
import Breadcrumb from '../../components/Common/Breadcrumb';

const quizzRequest = () => {
  return (
    <>
      <Breadcrumb
        pageName="Quizz Suggestions"
        description="Here you can contribute to the quizz database by submitting your own suggestions"
      />
      <section className="overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="container"></div>
      </section>
    </>
  );
};

export default quizzRequest;
