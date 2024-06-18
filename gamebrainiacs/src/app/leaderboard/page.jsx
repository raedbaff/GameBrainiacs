'use client';
import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../components/Common/Breadcrumb';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';

const page = () => {
  const { GlobalUser } = useAuth();

  const router = useRouter();

  const handleClick = id => {
    router.push(`/profile/${id}`);
  };

  const [players, SetPlayers] = useState();
  const fetchLeaderboard = async () => {
    try {
      const response = await fetch('/api/user/all', {
        method: 'GET',
      });
      const data = await response.json();
      SetPlayers(data.users);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchLeaderboard();
  }, []);
  return (
    <>
      <Breadcrumb
        pageName="Leaderboard"
        description={`There are currently ${players?.length} players in Brainniacs`}
      />
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="relative overflow-x-auto">
            <div className="flex justify-between items-center pb-4">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-white">
                Players
              </h2>
              <input
                type="text"
                className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search player... "
              />
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-400 dark:bg-gray-700 dark:text-white">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Player name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quizzes played
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Score
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Contact
                  </th>
                </tr>
              </thead>
              <tbody>
                {players?.map(player => (
                  <tr
                    key={player._id}
                    onClick={() => handleClick(player._id)}
                    className={`bg-gray-200 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-200 dark:hover:bg-blue-800 cursor-pointer ${player.email === GlobalUser?.email && 'dark:bg-blue-600 bg-blue-100'}`}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white "
                    >
                      {player.email === GlobalUser?.email ? (
                        'You'
                      ) : (
                        <div>{player.username}</div>
                      )}
                    </th>
                    <td className="px-6 py-4 text-black dark:text-white">
                      {player.participatedQuizzes.length}
                    </td>
                    <td className="px-6 py-4 text-black dark:text-white">
                      {player.score} points
                    </td>
                    <td className="px-6 py-4 text-black dark:text-white">
                      {player.email}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
