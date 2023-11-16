import React from 'react';
import ErrorContent from '../components/ErrorContent';

const ErrorPage = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid h-screen px-4 bg-white place-content-center">
        <ErrorContent />
       
      </div>
    </section>
  );
};

export default ErrorPage;
