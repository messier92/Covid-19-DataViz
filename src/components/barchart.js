// Bar chart - With reference from https://stackblitz.com/edit/d3-react-bar-chart?file=index.js
import React, { Component } from 'react';
import { render } from 'react-dom';
import { scaleBand, scaleLinear } from 'd3-scale';

import YAxis from './axis/y-axis.js';
import XAxis from './axis/x-axis.js';

import Grid from './grid/grid.js';
import Bar from './bar/bar.js';
import { transition } from 'd3-transition';
import data from './covid19test.json';

const totalCases = (data.length);
const allDates = []
var howManyEachDate = []
var formatedDate = []
var casesPerDay = []

// get all the Dates in string format
for (let step = 0; step < totalCases; step++) 
{
  allDates.push(new Date(data[step].DATE_OF_CONFIRMATION));
}

// function to convert string to Date 
function stringToDate(_date,_format,_delimiter)
{
 var formatLowerCase=_format.toLowerCase();
 var formatItems=formatLowerCase.split(_delimiter);
 var dateItems=_date.split(_delimiter);

 var monthIndex=formatItems.indexOf("mm");
 var dayIndex=formatItems.indexOf("dd");
 var yearIndex=formatItems.indexOf("yyyy");

 var month=parseInt(dateItems[monthIndex]);
 month-=1;
 var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]).toDateString();
 // removes the day and returns a string
 formatedDate = formatedDate.toString().substring(4);
 return formatedDate;
}

// converts the string-formatted date from the .csv to the actual date format
for (let step = 0; step < totalCases; step++) {
  formatedDate.push(stringToDate(data[step].DATE_OF_CONFIRMATION,"dd/MM/yyyy","/"));
}

var result = { };

   for(let i=0; i<formatedDate.length; ++i) 
   {
       if(!result[formatedDate[i]])
           result[formatedDate[i]]=0;
       ++result[formatedDate[i]];
   }

for (var i in result){
casesPerDay.push(result[i]);
} 

class BarChart extends Component {
 constructor() {
    super();

    const uniqueDateArrays = [];

    for (let step = 0; step < totalCases; step++) {
    uniqueDateArrays.indexOf(data[step].DATE_OF_CONFIRMATION) === -1 ? uniqueDateArrays.push(data[step].DATE_OF_CONFIRMATION) : console.log("This item already exists");
    }

    // Find out how to make this neater once the project is completed
    console.log(uniqueDateArrays);
    console.log(casesPerDay);

  // hardcoded values first - find out how to map 2 list of arrays into state
    this.state = {
      data: [
        { date: uniqueDateArrays[0], value: casesPerDay[0] },
        { date: uniqueDateArrays[1], value: casesPerDay[1] },
        { date: uniqueDateArrays[2], value: casesPerDay[2] },
        { date: uniqueDateArrays[3], value: casesPerDay[3] },
        { date: uniqueDateArrays[4], value: casesPerDay[4] },
        { date: uniqueDateArrays[5], value: casesPerDay[5] },
        { date: uniqueDateArrays[6], value: casesPerDay[6] },
        { date: uniqueDateArrays[7], value: casesPerDay[7] },
        { date: uniqueDateArrays[8], value: casesPerDay[8] },
        { date: uniqueDateArrays[9], value: casesPerDay[9] },
        { date: uniqueDateArrays[10], value: casesPerDay[10] },
        { date: uniqueDateArrays[11], value: casesPerDay[11] },
        { date: uniqueDateArrays[12], value: casesPerDay[12] },
        { date: uniqueDateArrays[13], value: casesPerDay[13] },
        { date: uniqueDateArrays[14], value: casesPerDay[14] },
        { date: uniqueDateArrays[15], value: casesPerDay[15] },
        { date: uniqueDateArrays[16], value: casesPerDay[16] },
        { date: uniqueDateArrays[17], value: casesPerDay[17] },
        { date: uniqueDateArrays[18], value: casesPerDay[18] },
        { date: uniqueDateArrays[19], value: casesPerDay[19] },
        { date: uniqueDateArrays[20], value: casesPerDay[20] },
        { date: uniqueDateArrays[21], value: casesPerDay[21] },
        { date: uniqueDateArrays[22], value: casesPerDay[22] },
        { date: uniqueDateArrays[23], value: casesPerDay[23] },
        { date: uniqueDateArrays[24], value: casesPerDay[24] },
        { date: uniqueDateArrays[25], value: casesPerDay[25] },
        { date: uniqueDateArrays[26], value: casesPerDay[26] },
        { date: uniqueDateArrays[27], value: casesPerDay[27] },
        { date: uniqueDateArrays[28], value: casesPerDay[28] },
        { date: uniqueDateArrays[29], value: casesPerDay[29] },
        { date: uniqueDateArrays[30], value: casesPerDay[30] },
        { date: uniqueDateArrays[31], value: casesPerDay[31] },
        { date: uniqueDateArrays[32], value: casesPerDay[32] },
        { date: uniqueDateArrays[33], value: casesPerDay[33] },
        { date: uniqueDateArrays[34], value: casesPerDay[34] },
        { date: uniqueDateArrays[35], value: casesPerDay[35] },
        { date: uniqueDateArrays[36], value: casesPerDay[36] },
        { date: uniqueDateArrays[37], value: casesPerDay[37] },
        { date: uniqueDateArrays[38], value: casesPerDay[38] },
        { date: uniqueDateArrays[39], value: casesPerDay[39] },
        { date: uniqueDateArrays[40], value: casesPerDay[40] },
        { date: uniqueDateArrays[41], value: casesPerDay[41] },
        { date: uniqueDateArrays[42], value: casesPerDay[42] },
        { date: uniqueDateArrays[43], value: casesPerDay[43] },
        { date: uniqueDateArrays[44], value: casesPerDay[44] },
        { date: uniqueDateArrays[45], value: casesPerDay[45] },
        { date: uniqueDateArrays[46], value: casesPerDay[46] },
      ] 
    }
  }

  render() {
    const { data } = this.state;
    const parentWidth = 1500;
    const margin = {
      top: 10,
      right: 10,
      bottom: 80,
      left: 40,
    };
    const ticks = 6;
    const t = transition().duration(1000);

    const width = parentWidth - margin.left - margin.right;
    const height = parentWidth * 0.5 - margin.top - margin.bottom;

    const xScale = scaleBand()
      .domain(data.map(d => d.date))
      .range([0, width])
      .padding(0.2);

    const yScale = scaleLinear()
      .domain([0, Math.max(...data.map(d => d.value))])
      .range([height, 0])
      .nice();

    return (
      <div>
        <svg width={width + margin.left + margin.right} height={height + margin.top + margin.bottom}>
          <g transform={`translate(${margin.left}, ${margin.top})`}>
 
            <XAxis {...{ xScale, yScale, height, ticks, t }} />
            <YAxis {...{ xScale, yScale, height, ticks, t }} />
            <Grid {...{ xScale, yScale, width, ticks, t }} />
            <Bar
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
  
export default BarChart;