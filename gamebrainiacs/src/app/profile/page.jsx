'use client';
import { useSession } from 'next-auth/react';
import React, { useState, useEffect, Suspense } from 'react';
import EditProfile from '@/components/EditProfile/index';
import Loading from '@/components/Loading/index';

const Profile = () => {
  const { data: session, update } = useSession();
  const [loadingPage, setLoadingPage] = useState(true);
  const [user, setUser] = useState({
    username: '',
    email: '',
    age: 0,
    bio: '',
  });
  const [EditProfileVisible, setEditProfileVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = async e => {
    const formdata = new FormData();
    formdata.append('file', e.target.files[0]);
    try {
      const response = await fetch('/api/upload/image', {
        method: 'POST',
        body: formdata,
      });
      if (response.ok) {
        console.log('success');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch('/api/user/update', {
        method: 'PUT',
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          age: user.age,
          bio: user.bio,
        }),
      });

      setLoading(false);
      setSuccessMessage('Updated Profile successfully !');
      setTimeout(() => {
        setEditProfileVisible(false);
        setSuccessMessage('');
      }, 2000);
      const newUser = await response.json();
      setUser(newUser.user);
      await update({ name: user.username });
    } catch (error) {
      setLoading(false);
      console.log(error);
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await fetch(`/api/user?email=${session.user.email}`);

        if (!response.ok) {
          console.log(response);
        }

        const userData = await response.json();
        setUser(userData.user);
        setLoadingPage(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (session) {
      getUserInfo();
    }
  }, [session]);

  return loadingPage ? (
    <Loading />
  ) : (
    <div className="relative">
      <EditProfile
        user={user}
        updateUser={setUser}
        visible={EditProfileVisible}
        setvisible={setEditProfileVisible}
        handleSubmit={handleSubmit}
        loading={loading}
        errorMessage={errorMessage}
        successMessage={successMessage}
      />

      <section className="overflow-hidden pb-[120px] pt-[180px]">
        <div className="container mx-auto">
          <div className="bg-slate-200 dark:bg-gray-700 shadow-md rounded-lg p-6 lg:p-10">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-12">
              <label htmlFor="myfile" className="cursor-pointer">
                <img
                  src={user.profilePicture || '/images/raed.jfif'}
                  className="rounded-full w-40 h-40 lg:w-60 lg:h-60 cursor-pointer"
                  alt="Profile Picture"
                />
                <input
                  type="file"
                  id="myfile"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>

              <div className="flex flex-col justify-center gap-4 lg:gap-6">
                <div className="flex flex-col lg:flex-row md:flex-row gap-3 items-center">
                  <span className="text-2xl lg:text-3xl font-semibold">
                    {user.username}
                  </span>
                  <span className="text-md lg:text-lg text-blue-800 dark:text-blue-400">
                    {user.email}
                  </span>
                  <button
                    className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-5"
                    onClick={() => setEditProfileVisible(true)}
                  >
                    Edit info
                  </button>
                </div>
                <span className="text-md lg:text-lg">
                  {user.age ? user.age : 'Age not defined'}
                </span>
                <p className="text-md lg:text-lg">
                  {user.bio ? user.bio : 'No bio yet'}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-slate-200 dark:bg-gray-700 shadow-md rounded-lg p-6 lg:p-10">
            <h2 className="text-xl lg:text-3xl font-semibold mb-4">
              Statistics
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <span className="text-md lg:text-lg">
                  <strong>Number of Quizzes:</strong>{' '}
                  {user.participatedQuizzes.length}
                </span>
                <div className="flex flex-col gap-2">
                  <span className="font-bold">Quizzes Participated in</span>
                  {user.participatedQuizzes.length === 0 ? (
                    <span className="text-red-600 cursor-pointer">
                      Nothing yet ...
                    </span>
                  ) : (
                    user.participatedQuizzes.map((item, index) => (
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

              <span className="text-md lg:text-lg">
                <strong>Score:</strong> {user.score}
              </span>
              <span className="text-md lg:text-lg text-green-500">
                <strong>Correct Answers:</strong> {user.correctAnswers}
              </span>
              <span className="text-md lg:text-lg text-red-500">
                <strong>Wrong Answers:</strong> {user.wrongAnswers}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
