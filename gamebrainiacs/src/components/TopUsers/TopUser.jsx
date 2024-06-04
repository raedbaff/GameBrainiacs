import './TopUser.css';

const TopUser = ({ user, index }) => {
  const {
    profilePicture,
    username,
    email,
    participatedQuizzes,
    score,
    wrongAnswers,
    correctAnswers,
  } = user;

  return (
    <div
      className={`w-full md:w-[30%] px-4 mb-8 p-4 m-4 hover:scale-110 cursor-pointer`}
    >
      <div
        className={`rounded-md bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8 ${index == 0 && 'border border-[#FFD700]'} ${index == 1 && 'border border-cyan-300'} ${index == 2 && ' border border-[#CD7F32]'} `}
      >
        <div className="mb-5 flex items-center space-x-1">
          Participated in{' '}
          <strong className="text-yellow ml-1">
            {participatedQuizzes.length} quizzes
          </strong>
        </div>
        <div className="flex flex-col gap-2">
          <p>
            Total <strong className="text-bold text-green-400">Correct</strong>{' '}
            answers {correctAnswers}{' '}
          </p>
          <p>
            Total <strong className="text-bold text-red-500">Wrong</strong>{' '}
            answers {wrongAnswers}{' '}
          </p>
          <div className="w-full border-t border-gray-300 my-8"></div>
        </div>
        <div className="flex items-center">
          <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
            <img src={profilePicture} alt={username} />
          </div>
          <div className="w-full flex justify-between">
            <div className="flex flex-col gap-1">
              <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
                {username}
              </h3>
              <small className="text-cyan-200">{email}</small>
            </div>
            <div
              className={`w-12 h-12 ${index == 0 && 'bg-[#FFD700]'} ${index == 1 && 'bg-cyan-300'} ${index == 2 && 'bg-[#CD7F32]'} text-black rounded-full flex items-center justify-center text-lg font-bold`}
            >
              {score}
            </div>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopUser;
