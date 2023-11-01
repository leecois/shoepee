import React from 'react';
import ErrorContent from '../components/ErrorContent'; 

const ErrorPage = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <ErrorContent />
      </div>
    </section>
  );
};

export default ErrorPage;
