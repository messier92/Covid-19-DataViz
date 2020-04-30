import React, { Component } from "react";
import * as d3 from "d3";

import Axis from "./axis/lineaxis";

// import a line here? and draw the coordinates? - proof of concept is we can draw the axis, so
// just need a find a way to create the line and make it accept our parameters (think of how to pass the parameters) -- try xyz axis where we have a linear linear but show band
import XAxis from './axis/x-axis.js'; 

class LineChart extends Component {
  state = {
    xScale: d3
      .scaleLinear()
      .domain([0, 45])
      .range([0, this.props.width])
      .nice(),
    yScale: d3
      .scaleBand()
      .domain([1, 11, 21, 31, 41, 51, 61, 71, 81, 91, 101, 111, 121, 131, 141, 151, 161, 171, 181, 191, 200])
      .range([this.props.height, 0]),
  };

  static getDerivedStateFromProps(props, state) {
    const { yScale, xScale, xScaleLabel } = state;

    yScale.range([props.height, 0]);
    xScale.range([0, props.width]);

    return {
      ...state,
      yScale,
      xScale, 
    };
  }

  render() {
    const { x, y, data, height, dataRepresentation } = this.props,
      { yScale, xScale } = this.state;

    return (
      <g transform={`translate(${x}, ${y+50})`}>
        {data.map(([x, y]) =>
          dataRepresentation({ x: xScale(x), y: yScale(y) })
        )}
        <Axis x={0} y={0} scale={yScale} type="Left" />
        <Axis x={0} y={height} scale={xScale} type="Bottom" />
      </g>
    );
  }
}

export default LineChart;
