'use client';
import React, { useState, useEffect } from 'react';

const Profile = () => {
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
      console.log('there is an error in the upload');
      console.log(error);
    }
  };

  return (
    <section className="overflow-hidden pb-[120px] pt-[180px]">
      <div className="container">
        <div className="flex items-center gap-4 p-4 dark:bg-gray-700 shadow-md rounded-lg bg-slate-200">
          <label htmlFor="myfile">
            {' '}
            <img
              src="/images/raed.jfif"
              className="rounded-full w-20 h-20 cursor-pointer"
              alt="Profile Picture"
            />
          </label>
          <input
            type="file"
            id="myfile"
            className="hidden"
            onChange={handleFileChange}
          ></input>

          <div className="flex flex-col justify-center gap-1">
            <span className="text-lg font-semibold">User</span>
            <span className="text-sm ">20 years old</span>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit at debitis accusantium hic! Amet a eum vero
              consequuntur facere qui.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
