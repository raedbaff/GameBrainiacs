import Image from 'next/image';
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const TopUser = ({ user }) => {
  const {
    profilePicture,
    username,
    participatedQuizzes,
    score,
    wrongAnswers,
    correctAnswers,
  } = user;

  return (
    <div className="w-full md:w-1/3 px-4 mb-8 p-4 m-4 ">
      <div className="rounded-sm bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8">
        <div className="mb-5 flex items-center space-x-1">
          Participated in{' '}
          <strong className="text-yellow ml-1">
            {participatedQuizzes.length} quizzes
          </strong>
        </div>
        <div className="flex flex-col gap-2">
          <strong>Score {score}</strong>
          <p>Total Correct answers {correctAnswers} </p>
          <p>Total Wrong answers {wrongAnswers} </p>
          <div className="w-full border-t border-gray-300 my-8"></div>
        </div>
        <div className="flex items-center">
          <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
            <img src={profilePicture} alt={username} />
          </div>
          <div className="w-full">
            <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
              {username}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopUser;
