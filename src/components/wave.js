import React, { useState } from 'react';
import { css } from '@emotion/core';

const Wave = () => {
  const [waves, setWaves] = useState(0);
  const label = `🎉👏 ${waves}  ${waves === 1 ? 'wave' : 'waves'}`;

  return (
    <button
      onClick={() => setWaves(waves + 1)}
      css={css`
        background: purple;
        border: none;
        color: white;
      `}
    >
      {label}
    </button>
  );
};
export default Wave;
