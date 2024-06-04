'use client';
import React, { useEffect, useState } from 'react';

const UserProfile = ({ params }) => {
  const [user, setUser] = useState();
  const [level, setLevel] = useState(1);

  const fetchUserProfile = async () => {
    try {
      const response = await fetch(`/api/user/findOne?id=${params.id}`, {
        method: 'GET',
      });
      const data = await response.json();
      setUser(data.user);
    } catch (error) {}
  };
  useEffect(() => {
    fetchUserProfile();
  }, [params]);

  useEffect(() => {
    const x = user?.score;

    switch (true) {
      case x < 5:
        console.log(x);
        setLevel(1);
        break;
      case x < 10:
        setLevel(2);
        break;
      case x < 20:
        setLevel(3);
        break;
      case x < 40:
        setLevel(4);
        break;
      case x < 80:
        setLevel(5);
        break;
      case x < 100:
        setLevel(6);
        break;
      default:
        setLevel(1);
    }
  }, [user]);
  return (
    <section className="overflow-hidden pb-[120px] pt-[180px]">
      <div className="container mx-auto">
        <div className="bg-slate-200 dark:bg-gray-700 shadow-md rounded-lg p-6 lg:p-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-12">
            <img
              src={user?.profilePicture || ''}
              className="rounded-full w-40 h-40 lg:w-60 lg:h-60 cursor-pointer"
              alt="Profile Picture"
            />
            <div className="flex flex-col justify-center gap-4 lg:gap-6">
              <div className="flex flex-col lg:flex-row md:flex-row gap-3 items-center">
                <span className="text-2xl lg:text-3xl font-semibold">
                  {user?.username}
                </span>
                <span className="text-md lg:text-lg text-blue-800 dark:text-blue-400">
                  {user?.email}
                </span>
              </div>
              <span className="text-md lg:text-lg">
                {user?.age ? user?.age : 'Age not defined'}
              </span>
              <p className="text-md lg:text-lg">
                {user?.bio ? user?.bio : 'No bio yet'}
              </p>
              <strong className="text-xl text-bold">level {level}</strong>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-slate-200 dark:bg-gray-700 shadow-md rounded-lg p-6 lg:p-10">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col w-1/2">
              <h2 className="text-xl lg:text-3xl font-semibold mb-4">
                Statistics
              </h2>
              <div className="flex flex-col gap-4">
                <span className="text-md lg:text-lg">
                  <strong>Number of Quizzes:</strong>{' '}
                  {user?.participatedQuizzes.length}
                </span>
                <span className="text-md lg:text-lg">
                  <strong>Score:</strong> {user?.score}
                </span>
                <span className="text-md lg:text-lg text-green-500">
                  <strong>Correct Answers:</strong> {user?.correctAnswers}
                </span>
                <span className="text-md lg:text-lg text-red-500">
                  <strong>Wrong Answers:</strong> {user?.wrongAnswers}
                </span>
              </div>
            </div>
            <div className="w-0.5 bg-gray-400 mx-4"></div>{' '}
            {/* Vertical separator */}
            <div className="flex flex-col w-1/2 gap-2 items-end ">
              <h2 className="text-xl lg:text-3xl font-semibold mb-4">
                Quizzes Participated in
              </h2>
              {user?.participatedQuizzes.length === 0 ? (
                <span className="text-red-600 cursor-pointer">
                  Nothing yet ...
                </span>
              ) : (
                user?.participatedQuizzes.map((item, index) => (
                  <span
                    key={index}
                    className="text-blue-600 hover:underline cursor-pointer"
                  >
                    {item}
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
