import React from 'react';
import { useNavigate } from 'react-router-dom';

const YourDesign = () => {
  const navigate = useNavigate();

  const handleContactRedirect = () => {
    navigate('/contact');
  };

  return (
    <div>
      <button
        className="mt-7 py-2 w-32 rounded-md border-2 outline-8 text-base text-red font-semibold tracking-wide hover:text-red-600"
        onClick={handleContactRedirect}
      >
        Contact Us
      </button>
    </div>
  );
};

export default YourDesign;
