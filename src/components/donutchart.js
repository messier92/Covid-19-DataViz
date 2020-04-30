// With reference from https://codesandbox.io/s/donut-chart-bzoz1?file=/src/App.js:0-1219
// KIV first - to break it down when got time later.
import React, { Component } from "react";
import Donut from "react-donut-chart";
  
class DonutChart extends Component {
  dataItems = [
    {
      label: "Cluster 1",
      value: 23000
    },
    {
      label: "Cluster 2",
      value: 40000
    },
    {
      label: "Cluster 3",
      value: 33000
    },
    {
      label: "Cluster 4",
      value: 35000
    },
    {
      label: "Cluster 5",
      value: 36000
    }
  ];

  render() {
    return (
      <g>
        <Donut data={this.dataItems} />
      </g>
    );
  }
}

export default DonutChart;




