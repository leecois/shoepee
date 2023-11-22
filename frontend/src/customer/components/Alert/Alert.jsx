import React, { useEffect } from 'react';
import Alert from '@mui/material/Alert';
import { useTheme } from '@mui/material/styles';

const AlertModal = ({ message, type, isVisible, onClose }) => {
  const theme = useTheme();

  useEffect(() => {
    let timer;
    if (isVisible) {
      timer = setTimeout(onClose, 3000); // Increased duration for visibility
    }

    return () => clearTimeout(timer);
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <Alert
      severity={type} // Can be 'error', 'warning', 'info', 'success'
      style={{
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        zIndex: 50,
        backgroundColor: 'black', // Luxurious black background
        color: 'gold', // Gold color for the text
        border: '2px solid gold', // Gold border for emphasis
        boxShadow: theme.shadows[4],
        fontFamily: 'serif' // Serif font for an elegant touch
      }}
      onClose={onClose}
    >
      {message}
    </Alert>
  );
};

export default AlertModal;
