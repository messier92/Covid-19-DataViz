import React, {Component} from 'react';
import { Column, Row } from "simple-flexbox";
import BarChart from "./barchart";
import PopPyramid from "./poppyramid";
import DonutChart from "./donutchart";
import ScatterLineChart from "./scatterlinechart";

class SimpleGraphs extends React.Component {

  render() {
    return (
      <Column flexGrow={1}>

        <Row vertical="center" className="container_barchart">
          <Column flexGrow={1} horizontal="center" id="barchart">
          <BarChart/>
          </Column>
        </Row>

        <Row vertical="center" className="container_poppyramid">
          <Column flexGrow={1} horizontal="center">
            <PopPyramid />
          </Column>
        </Row>
        
        <Row vertical="center" className="container_donutchart">
          <Column flexGrow={1} horizontal="center">
           <DonutChart/> 
          </Column>
        </Row>
        
        <Row vertical="center" className="container_linechart">
          <Column flexGrow={1} horizontal="center">
          <ScatterLineChart />
          </Column>
        </Row>
      
      </Column>
    );
  }
}

export default SimpleGraphs;
