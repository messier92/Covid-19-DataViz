// Bar chart - With reference from https://stackblitz.com/edit/d3-react-bar-chart?file=index.js
import React, { Component } from 'react';
import { render } from 'react-dom';
import { scaleBand, scaleLinear } from 'd3-scale';

import XYZAxis from './axis/xyaxis.js';
import LeftBar from './bar/LeftBar.js';
import RightBar from './bar/RightBar.js';

import { transition } from 'd3-transition';
import data from './covid19test.json';
import * as d3 from 'd3';

class PopPyramid extends Component {
 constructor() {
    super();

  // hardcoded values first - find out how to map 2 list of arrays into state
    this.state = {
      data: [
       {group: '1-9', male: 10, female: 12},
       {group: '10-19', male: 14, female: 15},
       {group: '20-29', male: 15, female: 18},
      ] 
    }
  }

  render() {
    const { data } = this.state;
    const width = 1500;
  
    const margin = {
      top: 20,
      right: 20,
      bottom: 24,
      left: 20,
      middle: 28
    };

    const height = width * 0.5 - margin.top - margin.bottom;

    const ticks = 6;
    const t = transition().duration(1000);

    // the width of each side of the chart
    const  regionWidth = width/2 - margin.middle;

    const pointA = regionWidth;
    const pointB = width - regionWidth;

    var maxValueFemale = Math.max(
      d3.max(data, function(d) { return (d.female); })
      );

    var maxValueMale = Math.max(
      d3.max(data, function(d) { return (d.male); })
      );

    const yScale = scaleBand()
      .domain(data.map(d => d.group))
      .range([height, 0])
      .padding(0.2);

    const xScale = scaleLinear()
      .domain([0, maxValueMale])
      .range([0, width/2])
      .nice();

    const xScaleFemale = scaleLinear()
      .domain([0, maxValueFemale])
      .range([0, width/2])
      .nice();

    const xScaleMale = scaleLinear()
      .domain([maxValueMale, 0])
      .range([0, width/2])
      .nice();


    return (
      <div>
        <svg width={width + margin.left + margin.right} height={height + margin.top + margin.bottom}>
          <g transform={`translate(${margin.left}, ${margin.top})`}>

            <XYZAxis {...{ xScaleFemale, xScaleMale, yScale, height, ticks, t  }} />
            <LeftBar
              {...{
                xScale,
                yScale,
                data,
                height,
                t,
              }}
            />
            <RightBar
              {...{
                xScale,
                yScale,
                data,
                height,
                t,
              }}
            />
          </g>
        </svg>
      </div>
    );
  }
}
  
export default PopPyramid;