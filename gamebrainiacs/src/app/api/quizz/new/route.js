import { connectToDB } from '../../../utils/db';
import Quizz from '../../../models/quizz';
export const POST = async (req, res) => {
  try {
    await connectToDB();
    const quizzes = await req.json();

    await Quizz.insertMany(quizzes);

    return new Response(
      JSON.stringify({
        message: 'Successfully Submitted suggestions, Thank you',
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
