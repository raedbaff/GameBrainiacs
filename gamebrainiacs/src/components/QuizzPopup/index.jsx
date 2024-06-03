import React from 'react';

const QuizzPopUp = ({ isOpen, handleReady, handleNotReady }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center ${isOpen ? 'visible' : 'invisible'}`}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative dark:bg-gray-dark mb-10 rounded-sm bg-white dark:shadow-none p-8 shadow-lg z-10">
        <h2 className="flex flex-row items-center justify-center text-red-600 text-2xl font-bold mb-4">
          Important Notice
        </h2>
        <p className="text-lg mb-4">
          You can only participate in each quiz once.
        </p>
        <p className="mb-4">Each question has 15 seconds.</p>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mr-4 rounded"
            onClick={handleReady}
          >
            I'm Ready
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
            onClick={handleNotReady}
          >
            I'm Not Ready
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizzPopUp;
