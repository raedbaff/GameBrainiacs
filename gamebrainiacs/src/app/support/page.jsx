import React from 'react';
import Breadcrumb from '../../components/Common/Breadcrumb';
import TicketForm from '../../components/TicketForm';
const Support = () => {
  return (
    <>
      <Breadcrumb
        pageName="Support Page"
        description="Need help or found a bug, please be sure to reach out to us !!"
      />
      <section className="overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="container">
          <TicketForm />
        </div>
      </section>
    </>
  );
};

export default Support;
