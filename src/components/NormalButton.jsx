
import React from 'react';

const NormalButton = ({ text, onClick, className = "", ...props }) => {
  return (
    <button
      className={`bg-gradient-to-r from-lime-500 to-cyan-500 hover:from-lime-600 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-110 transition duration-300 ease-in-out ${className}`}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default NormalButton;
