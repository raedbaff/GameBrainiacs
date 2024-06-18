import mongoose, { model, models, Schema } from 'mongoose';

const TicketSchema = new Schema({
  issuer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});
const Ticket = models.Ticket || model('Ticket', TicketSchema);
export default Ticket;
