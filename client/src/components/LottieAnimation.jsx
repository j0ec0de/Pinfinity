import React, { useRef } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LottieAnimation = ({ src, width = 300, height = 300, loop = true, autoplay = true }) => {
  const lottieRef = useRef();

  return (
    <div style={{ width, height }}>
      <DotLottieReact
        lottieRef={lottieRef}
        src={src}
        loop={loop}
        autoplay={autoplay}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default LottieAnimation;
