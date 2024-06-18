import SignUpForm from '../../components/SignUpForm/index';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const SignupPage = async () => {
  const session = await getServerSession();
  if (session) {
    redirect('/');
  }

  return (
    <>
      <SignUpForm />
    </>
  );
};

export default SignupPage;
