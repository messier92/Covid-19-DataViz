// With reference from https://stackblitz.com/edit/d3-react-bar-chart?file=index.js
import React from 'react';
import Axis from './axis';

const XYZAxis = ({ xScaleFemale, xScaleMale, yScale, height, ticks, t }) => {
  const xSettings = {
    scale: xScaleFemale,
    orient: 'bottom',
    transform: `translate(750, 706)`,
    t
  };
  const ySettings = {
    scale: yScale,
    orient: 'left',
    transform: 'translate(750, 0)',
    ticks,
    t
  };
  const zSettings = {
    scale: xScaleMale,
    orient: 'bottom',
    transform: `translate(0, 706)`,
    ticks,
    t
  };

  return (
    <g className="pop-pyra-axis">
      <Axis {...xSettings} />
      <Axis {...ySettings} />
      <Axis {...zSettings} />
    </g>
  );
};

export default XYZAxis;
