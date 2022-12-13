import React from 'react';
import SpinnerIcon from '../assets/icons/SpinnerIcon';

function Loading() {
  return (
    <div className="flex justify-center items-center h-full">
      <SpinnerIcon />
    </div>
  );
}

export default Loading;
