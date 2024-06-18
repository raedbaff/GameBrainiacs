'use client';

import { useAuth } from '../../context/AuthContext';
import { useEffect, useState } from 'react';

const TicketForm = () => {
  const { GlobalUser } = useAuth();

  const [ticket, setTicket] = useState({
    user: '',
    name: '',
    email: '',
    message: '',
  });
  const [success, setSuccess] = useState('');

  const submitForm = async e => {
    try {
      e.preventDefault();
      console.log(ticket);
      const response = await fetch('/api/ticket/new', {
        method: 'POST',
        body: JSON.stringify({
          user: ticket.user,
          name: ticket.name,
          email: ticket.email,
          message: ticket.message,
        }),
      });
      const data = await response.json();
      setSuccess(data.message);
      setTicket({ ...ticket, message: '' });
      setTimeout(() => {
        setSuccess('');
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (GlobalUser) {
      setTicket(prevTicket => ({
        ...prevTicket,
        user: GlobalUser._id || '',
        name: GlobalUser.username || '',
        email: GlobalUser.email || '',
      }));
    }
  }, [GlobalUser]);
  return (
    <div>
      <div className="w-full px-4">
        <div
          className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
          data-wow-delay=".15s
              "
        >
          <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
            Need Help or Found a bug ? Open a Ticket
          </h2>
          <p className="mb-12 text-base font-medium text-body-color">
            Our support team will get back to you ASAP via email.
          </p>
          <form onSubmit={submitForm}>
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 md:w-1/2">
                <div className="mb-8">
                  <label
                    htmlFor="name"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    disabled
                    type="text"
                    placeholder="Enter your name"
                    className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    value={ticket.name}
                  />
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2">
                <div className="mb-8">
                  <label
                    htmlFor="email"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Your Email
                  </label>
                  <input
                    disabled
                    type="email"
                    placeholder="Enter your email"
                    value={ticket.email}
                    className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  />
                </div>
              </div>
              <div className="w-full px-4">
                <div className="mb-8">
                  <label
                    htmlFor="message"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Your Message
                  </label>
                  <textarea
                    value={ticket.message}
                    onChange={e =>
                      setTicket({ ...ticket, message: e.target.value })
                    }
                    name="message"
                    rows={5}
                    placeholder="Enter your Message"
                    className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  ></textarea>
                </div>
              </div>
              <div className="w-full px-4">
                <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                  Submit Ticket
                </button>
                {success !== '' && (
                  <p className="text-center text-base leading-relaxed text-green-600">
                    {success}
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TicketForm;
