// With reference from https://stackblitz.com/edit/d3-react-bar-chart?file=index.js
import React from 'react';
import Axis from './axis';

const YAxis = ({ xScale, yScale, height, ticks, t }) => {
  const ySettings = {
    scale: yScale,
    orient: 'left',
    transform: 'translate(0, 0)',
    ticks,
    t
  };
  return (
    <g className = "axis-group-y">
      <Axis {...ySettings} />
    </g>
  );
};

export default YAxis;
