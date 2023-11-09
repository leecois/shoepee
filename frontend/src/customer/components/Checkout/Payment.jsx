import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React from 'react';

const Payment = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">
        2. Payment{' '}
        <span>
          <LockOutlinedIcon />
        </span>
      </h1>
    </div>
  );
};

export default Payment;
