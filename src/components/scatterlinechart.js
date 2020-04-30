// Add in the lines - takes starting date, ending date - kiv
// Add in the points - takes starting date, confirmation date, ending date - kiv

import React, { Component } from 'react'
import { scaleBand, scaleLinear, scaleTime } from 'd3-scale'

import Chart from './linechart' 
import Datapoint from "./point/point";
import Line from "./line/line";
// let 21/01/2020 be day 0, 23/01/2020 is day 2 and 19/02/2020 is day 27+2 = 29 
const data = [[0, "1"], [2, "1"], [29, "1"], [5,"11"], [8, "11"], [13, "11"]];

class ScatterLineChart extends Component {
  state = {
    width: 1500,
    height: 500
  };

  render() {
    const { width, height } = this.state;

    return (
      <div className="App">
        <svg width="1500" height="750" onClick={this.onClick}>
          <Chart
            x={50}
            y={50}
            width={width}
            height={height}
            data={data}
            dataRepresentation={({ x, y }) => <Datapoint x={x} y={y} r={5} />}
          />
          
        </svg>
      </div>
    );
  }
}

export default ScatterLineChart;