import SignInForm from '@/components/SignInForm/index';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const SigninPage = async () => {
  const session = await getServerSession();

  if (session) {
    redirect('/');
  }

  return (
    <>
      <SignInForm />
    </>
  );
};

export default SigninPage;
