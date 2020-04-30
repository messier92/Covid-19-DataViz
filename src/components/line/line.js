import React from "react";
import * as d3 from "d3";

class Line extends React.Component {
  drawLine() {
    const { data } = this.props;

    const xScale = d3
      .scaleLinear()
      .domain(d3.extent(this.props.data, ({ times }) => times))
      .rangeRound([0, this.props.width]);

    const yScale = d3
      .scaleLinear()
      .domain(d3.extent(this.props.data, ({ value }) => value))
      .rangeRound([this.props.height, 0]);

    const line = d3
      .line()
      .x(d => xScale(d.times))
      .y(d => yScale(d.value));

    return <path d={line(data)} fill="none" stroke="red" />;
  }

  render() {
    const { width, height } = this.props;

    return (
      <svg width={width} height={height}>
        {this.drawLine()}
      </svg>
    );
  }
}

export default Line;
