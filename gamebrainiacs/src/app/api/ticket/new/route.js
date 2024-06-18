import { connectToDB } from '../../../utils/db';
import Ticket from '../../../models/ticket';

export const POST = async (req, res) => {
  try {
    const { user, name, email, message } = await req.json();
    console.log(user, name, email, message);
    await connectToDB();
    const ticket = new Ticket({
      issuer: user,
      name,
      email,
      message,
    });
    await ticket.save();
    return new Response(
      JSON.stringify({ message: 'Ticket submitted successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message || 'Internal Server Error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
