'use client';
import React, { useEffect, useState } from 'react';
import SectionTitle from '../Common/SectionTitle';
import { UserData } from '@/components/TopUsers/TopUsersData';
import TopUser from '@/components/TopUsers/TopUser';

const Quiz = () => {
  const [users, setUsers] = useState([]);
  const fetchTopUsers = async () => {
    try {
      const response = await fetch('/api/user/all', {
        method: 'GET',
      });
      const data = await response.json();

      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTopUsers();
  }, []);
  return (
    <section id="quiz" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-col items-start">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle title="Top 3 players" paragraph="" mb="44px" />
            </div>
            <div className="flex flex-wrap -mx-4 w-screen">
              {users?.map(user => (
                <TopUser key={user._id} user={user} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
