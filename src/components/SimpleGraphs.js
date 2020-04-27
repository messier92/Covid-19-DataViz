import React, {Component} from 'react';
import { Column, Row } from "simple-flexbox";
import BarChart from "./barchart";
import PopPyramid from "./poppyramid";

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
        
        <Row vertical="center">
          <Column flexGrow={1} horizontal="center">
            <h3> Pie Chart </h3>
          </Column>
        </Row>
        
        <Row vertical="center">
          <Column flexGrow={1} horizontal="center">
          <h3> Line Graph </h3>
          </Column>
        </Row>
      
      </Column>
    );
  }
}

export default SimpleGraphs;
