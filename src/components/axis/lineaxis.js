import React, { Component } from "react";
import * as d3 from "d3";
import styled from "styled-components";

const Text = styled.text`
  fill: black;
  font-family: sans-seriff;
  font-size: 10px;
`;

class LineAxis extends Component {
  constructor() {
    super();
    this.gRef = React.createRef();
  }

  componentDidMount() {
    this.d3Render();
  }

  componentDidUpdate() {
    this.d3Render();
  }

  d3Render() {
    const { type, scale } = this.props;
    d3.select(this.gRef.current).call(d3[`axis${type}`](scale));
  }

  get labelPos() {
    const { type, scale } = this.props;

    switch (type) {
      case "Top":
        return { x: scale.range()[1] + 20, y: 0 };
      case "Right":
        return { x: 20, y: 0 };
      case "Bottom":
        return { x: scale.range()[1] + 25, y: 25 };
      case "Left":
        return { x: -10, y: -10 };
      default:
        return { x: 0, y: 0 };
    }
  }

  render() {
    const { x, y, label } = this.props;

    return (
      <g ref={this.gRef} transform={`translate(${x}, ${y})`}>
        <Text {...this.labelPos}>{label}</Text>
      </g>
    );
  }
}

export default LineAxis;
