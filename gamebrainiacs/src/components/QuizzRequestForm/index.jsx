'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const QuizzRequestForm = () => {
  const { GlobalUser } = useAuth();
  const [numberOfQuestions, setNumberOfQuestions] = useState(1);
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [quizzes, setQuizzes] = useState([
    {
      suggester: '',
      category: '',
      question: '',
      answers: [
        {
          text: '',
          correct: true,
        },
        {
          text: '',
          correct: false,
        },
        {
          text: '',
          correct: false,
        },
        {
          text: '',
          correct: false,
        },
      ],
    },
  ]);
  const handleNumberOfQuestionsChange = e => {
    let value = parseInt(e.target.value);
    value < 1 ? setNumberOfQuestions(1) : setNumberOfQuestions(value);

    let newQuizzes = [...quizzes];
    if (value > newQuizzes.length) {
      for (let i = quizzes.length; i < value; i++) {
        newQuizzes.push({
          suggester: GlobalUser?._id,
          category: '',
          question: '',
          answers: [
            {
              text: '',
              correct: true,
            },
            {
              text: '',
              correct: false,
            },
            {
              text: '',
              correct: false,
            },
            {
              text: '',
              correct: false,
            },
          ],
        });
      }
    } else {
      newQuizzes.length = value;
    }
    setQuizzes(newQuizzes);
  };
  const handleQuizzCategory = (index, value) => {
    const newQuizzes = [...quizzes];
    newQuizzes[index].category = value;
    setQuizzes(newQuizzes);
  };
  const handleQuestionChange = (index, value) => {
    const newQuizzes = [...quizzes];
    newQuizzes[index].question = value;
    setQuizzes(newQuizzes);
  };
  const handleAnswerChange = (index, answerIndex, value) => {
    const newQuizzes = [...quizzes];
    newQuizzes[index].answers[answerIndex].text = value;
    setQuizzes(newQuizzes);
  };
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch('/api/quizz/new', {
        method: 'POST',
        body: JSON.stringify(quizzes),
      });
      const data = await response.json();
      console.log(data);
      console.log(data.message);
      setLoading(false);
      setSuccess(data.message);
      setNumberOfQuestions(1);
      setQuizzes([
        {
          suggester: GlobalUser?._id,
          category: '',
          question: '',
          answers: [
            {
              text: '',
              correct: true,
            },
            {
              text: '',
              correct: false,
            },
            {
              text: '',
              correct: false,
            },
            {
              text: '',
              correct: false,
            },
          ],
        },
      ]);
      setTimeout(() => {
        setSuccess('');
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (GlobalUser) {
      const newQuizzes = [...quizzes];
      newQuizzes[0].suggester = GlobalUser._id;
      setQuizzes(newQuizzes);
    }
  }, [GlobalUser]);
  const CategoriesList = [
    'Counter Strike 2',
    'Valorant',
    'League of Legends',
    'Genshin Impact',
    'Dota 2',
    'Fortnite',
  ];
  return (
    <div>
      <div className="w-full px-4">
        <div
          className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
          data-wow-delay=".15s
              "
        >
          <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
            Have any quizz suggestions ?
          </h2>
          <div className="flex flex-col gap-2 mb-12">
            <p className="text-base font-medium text-body-color">
              Use this form to send us your suggestions and have your
              suggestions part of the quizzes challenges
            </p>
            <strong className="text-red-500">
              Please make sure to provide valid information so that your
              suggestion may be accepted .
            </strong>
            <h2 className="text-red-500 underline">
              Make sure the first answer you provide is the correct one
            </h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="-mx-4 flex flex-col">
              <div className="w-full px-4 md:w-1/2">
                <div className="mb-8">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                    Number of questions
                  </label>
                  <input
                    type="number"
                    value={numberOfQuestions}
                    onChange={handleNumberOfQuestionsChange}
                    className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  />
                </div>
              </div>
              {quizzes.map((quizz, index) => (
                <div key={index}>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Category
                      </label>
                      <select
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        onChange={e =>
                          handleQuizzCategory(index, e.target.value)
                        }
                      >
                        <option value={'choose'}>Choose category</option>
                        {CategoriesList.map(category => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="w-full px-4" key={index}>
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Question number {index + 1}
                      </label>
                      <input
                        placeholder="Enter your question"
                        value={quizz.question}
                        onChange={e => {
                          handleQuestionChange(index, e.target.value);
                        }}
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></input>
                    </div>
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Answers
                      </label>
                      {quizz.answers.map((answer, answerIndex) => (
                        <input
                          key={answerIndex}
                          placeholder={`${answerIndex === 0 ? 'Enter correct answer' : `Enter incorrect answer ${answerIndex}`}`}
                          value={answer.text}
                          onChange={e => {
                            handleAnswerChange(
                              index,
                              answerIndex,
                              e.target.value
                            );
                          }}
                          className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 my-2 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        ></input>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <div className="w-full px-4">
                <button
                  disabled={loading}
                  className={`rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark ${loading ? 'cursor-progress' : ''}`}
                >
                  Submit Suggestions
                </button>
                {success !== '' && (
                  <p className="text-center text-base leading-relaxed text-green-600">
                    {success}
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuizzRequestForm;
