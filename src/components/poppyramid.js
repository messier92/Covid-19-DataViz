// Pop Pyramid - With reference from https://jsbin.com/jalex/1/edit?js,output
// supposed to be percentage?
import React, { Component } from 'react';
import { render } from 'react-dom';
import { scaleBand, scaleLinear } from 'd3-scale';

import XYZAxis from './axis/xyaxis.js';
import LeftBar from './bar/LeftBar.js';
import RightBar from './bar/RightBar.js';

import { transition } from 'd3-transition';
import data from './covid19test.json';
import * as d3 from 'd3';

const totalCases = (data.length);

var listAgeGender = []

const groupa = []
const groupb = []
const groupc = []
const groupd = []
const groupe = []
const groupf = []
const groupg = []
const grouph = []
const groupi = []

for (let step = 0; step < totalCases; step++) 
{
  listAgeGender.push(([data[step].AGE,data[step].GENDER]));
}


for (let step = 0; step < totalCases; step++) 
{
  if (listAgeGender[step][0] > 1 && listAgeGender[step][0] < 10)
  {
    groupa.push(listAgeGender[step][1])
  }
  else if (listAgeGender[step][0] > 10 && listAgeGender[step][0] < 19)
  {
    groupb.push(listAgeGender[step][1])
  }
  else if (listAgeGender[step][0] > 20 && listAgeGender[step][0] < 29)
  {
    groupc.push(listAgeGender[step][1])
  }
    else if (listAgeGender[step][0] > 30 && listAgeGender[step][0] < 39)
  {
    groupd.push(listAgeGender[step][1])
  }
    else if (listAgeGender[step][0] > 40 && listAgeGender[step][0] < 49)
  {
    groupe.push(listAgeGender[step][1])
  }
  else if (listAgeGender[step][0] > 50 && listAgeGender[step][0] < 59)
  {
    groupf.push(listAgeGender[step][1])
  }
    else if (listAgeGender[step][0] > 60 && listAgeGender[step][0] < 69)
  {
    groupg.push(listAgeGender[step][1])
  }
  else if (listAgeGender[step][0] > 70 && listAgeGender[step][0] < 79)
  {
    grouph.push(listAgeGender[step][1])
  }
    else
  {
    groupi.push(listAgeGender[step][1])
  }
}

function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}

const groupam = getOccurrence(groupa, "M");
const groupaf = getOccurrence(groupa, "F");
const groupbm = getOccurrence(groupb, "M");
const groupbf = getOccurrence(groupb, "F");
const groupcm = getOccurrence(groupc, "M");
const groupcf = getOccurrence(groupc, "F");

const groupdm = getOccurrence(groupd, "M");
const groupdf = getOccurrence(groupd, "F");
const groupem = getOccurrence(groupe, "M");
const groupef = getOccurrence(groupe, "F");
const groupfm = getOccurrence(groupf, "M");
const groupff = getOccurrence(groupf, "F");

const groupgm = getOccurrence(groupg, "M");
const groupgf = getOccurrence(groupg, "F");
const grouphm = getOccurrence(grouph, "M");
const grouphf = getOccurrence(grouph, "F");
const groupim = getOccurrence(groupi, "M");
const groupif = getOccurrence(groupi, "F");

class PopPyramid extends Component {
 constructor() {
    super();

    this.state = {
      data: [
       {group: '0', male: 0, female: 0},
       {group: '1-9', male: groupam, female: groupaf},
       {group: '10-19', male: groupbm, female: groupbf},
       {group: '20-29', male: groupcm, female: groupcf},
       {group: '30-39', male: groupdm, female: groupdf},
       {group: '40-49', male: groupem, female: groupef},
       {group: '50-59', male: groupfm, female: groupff},
       {group: '60-69', male: groupgm, female: groupgf},
       {group: '70-79', male: grouphm, female: grouphf},
       {group: '80+', male: groupim, female: groupif},
       ]
    }
  }

  render() {
    const { data } = this.state;
    const width = 1500;
    const height = 800;
  
    const margin = {
      top: 20,
      right: 20,
      bottom: 24,
      left: 20,
      middle: 28
    };

    const svgheight = width * 0.5 - margin.top - margin.bottom;

    const ticks = 3;
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
        <svg width={width + margin.left + margin.right} height={svgheight + margin.top + margin.bottom}>
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