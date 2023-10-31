import React from 'react';
import Lottie from 'react-lottie';

/* eslint-disable */
const LottieComponent = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    renderer: 'svg',
    
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={70} width={200} />
    </div>
  );
};

export default LottieComponent;
