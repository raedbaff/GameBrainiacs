'use client';
import { useEffect, useState } from 'react';
import QuizzData from './quizzData';

const page = ({ params }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(0);
  const [numberOfQuestions, setnumberOfQuestions] = useState(0);
  const [Category, setCategory] = useState('');
  const [filteredQuizzData, setFilteredQuizzData] = useState([]);
  const [seconds, setSeconds] = useState(15);

  const handleAnswerClick = (index, answer) => {
    setSelectedAnswer(index);
    if (answer.correct == true) {
      setResult(prev => prev + 1);
    }
  };
  const nextQuestion = () => {
    setCurrentQuestionIndex(prev => prev + 1);
    setSelectedAnswer(null);
    setSeconds(15);
  };

  const showResults = () => {
    setShowResult(true);
  };
  const tryAgain = () => {
    setResult(0);
    setCurrentQuestionIndex(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setSeconds(15);
  };

  useEffect(() => {
    const decodedCategory = decodeURIComponent(params.id);
    setCategory(decodedCategory);
  }, [params.id]);

  useEffect(() => {
    setFilteredQuizzData(
      QuizzData.filter(
        quizz => quizz.category.toLowerCase() == Category.toLowerCase()
      )
    );
    setnumberOfQuestions(
      QuizzData.filter(
        quizz => quizz.category.toLowerCase() == Category.toLowerCase()
      )?.length
    );
  }, [Category]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);
    if (seconds == 0) {
      clearInterval(interval);
      if (currentQuestionIndex == filteredQuizzData.length - 1) {
        setShowResult(true);
      } else {
        setCurrentQuestionIndex(prev => prev + 1);
        setSeconds(15);
      }
    }
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <>
      <section className="overflow-hidden pb-[120px] pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Test Your Skills: Compete in Your{' '}
                  <span className="text-lime-300">Favorite Games</span> and
                  Reach the Pinnacle of the Leaderboard!
                </h1>

                {!showResult ? (
                  <div>
                    <div className="p-6 rounded-lg shadow-md dark:bg-gray-dark bg-white">
                      <div className="flex flex-row justify-between">
                        <h3 className="text-xl font-semibold mb-4 flex flex-row justify-between">
                          <span className="text-lime-400 mr-2">{Category}</span>{' '}
                          Quiz Question
                        </h3>
                        <div className="bg-gray-800 text-red-500 font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center">
                          <span>{seconds}</span>
                        </div>
                      </div>

                      <p className="mb-6">
                        {filteredQuizzData[currentQuestionIndex]?.question} (
                        {currentQuestionIndex + 1} / {numberOfQuestions})
                      </p>
                      <div className="space-y-4">
                        {filteredQuizzData[currentQuestionIndex]?.answers.map(
                          (answer, index) => (
                            <button
                              key={index}
                              onClick={() => handleAnswerClick(index, answer)}
                              className={`block w-full text-left px-4 py-2 rounded-lg border-2 ${
                                selectedAnswer === index
                                  ? 'bg-blue-500 text-white border-blue-500'
                                  : 'bg-white text-gray-800 border-gray-300 hover:bg-blue-100'
                              }`}
                            >
                              {answer.text}
                            </button>
                          )
                        )}
                        {currentQuestionIndex ===
                        filteredQuizzData?.length - 1 ? (
                          <button
                            onClick={() => showResults()}
                            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                          >
                            Show result
                          </button>
                        ) : (
                          <button
                            disabled={selectedAnswer == null}
                            onClick={() => nextQuestion()}
                            className={`inline-flex items-center justify-center rounded-full ${selectedAnswer == null ? 'bg-primary opacity-30' : 'bg-primary'} px-4 py-2 text-sm font-semibold text-white`}
                          >
                            Next
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="p-6 rounded-lg shadow-md dark:bg-gray-800 bg-white w-full">
                      <h3 className="text-2xl font-semibold mb-4 flex justify-center items-center text-gray-800 dark:text-gray-200">
                        Final Result
                      </h3>
                      <p className="mb-6 text-center text-lg text-gray-600 dark:text-gray-400">
                        Your total score:{' '}
                        <span className="font-bold text-gray-800 dark:text-gray-200">
                          {result}
                        </span>
                      </p>
                      <div className="space-y-4 flex flex-col items-center">
                        <div className="text-lg text-green-600 dark:text-green-400">
                          Correct Answers:{' '}
                          <span className="font-bold">{result}</span>
                        </div>
                        <div className="text-lg text-red-600 dark:text-red-400">
                          Incorrect Answers:{' '}
                          <span className="font-bold">
                            {numberOfQuestions - result}
                          </span>
                        </div>
                        <button
                          onClick={() => tryAgain()}
                          className="inline-flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 px-4 py-2 text-sm font-semibold text-white w-32 transition-colors duration-300"
                        >
                          Try Again
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="w-full px-4 lg:w-4/12">
              <div className="shadow-three dark:bg-gray-dark mb-10 rounded-sm bg-white dark:shadow-none">
                <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                  Popular Category
                </h3>
                <ul className="px-8 py-6">
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Tailwind Templates
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Landing page
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Startup
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Business
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Multipurpose
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
