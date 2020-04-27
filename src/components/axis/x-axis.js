// With reference from https://stackblitz.com/edit/d3-react-bar-chart?file=index.js
import React from 'react';
import Axis from './axis';

const XAxis = ({ xScale, yScale, height, ticks, t }) => {
  const xSettings = {
    scale: xScale,
    orient: 'bottom',
    transform: `translate(0, ${height})`,
    ticks, 
    t
  };

  return (
    <g className = "axis-group-x">
      <Axis {...xSettings} />
    </g>
  );
};

export default XAxis;
