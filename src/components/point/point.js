import React, { Component } from "react";
import styled from "styled-components";

const Circle = styled.circle`
  fill: steelblue;
  fill-opacity: 0.7;
  stroke: steelblue;
  stroke-width: 1.5px;
`;

const DEFAULT_RADIO = 5;

class Point extends Component {
  state = {
    r: this.props.r || DEFAULT_RADIO
  };

  highlight = () => {
    this.setState({
      r: 10
    });
  };

  unhightlight = () => {
    this.setState({
      r: this.props.r || DEFAULT_RADIO
    });
  };

  render() {
    const { x, y } = this.props;
    const { r } = this.state;
    return (
      <Circle
        cx={x}
        cy={y}
        r={r}
        onMouseOver={this.highlight}
        onMouseOut={this.unhightlight}
      />
    );
  }
}

export default Point;
