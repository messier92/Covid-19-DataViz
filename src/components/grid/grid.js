// With reference from https://stackblitz.com/edit/d3-react-bar-chart?file=index.js
import React from 'react';
import { axisLeft } from 'd3-axis';
import { select } from 'd3-selection';

const gridlines = ({ yScale, width, ticks }) => axisLeft(yScale)
  .ticks(ticks)
  .tickSize(-width)
  .tickFormat('');

class Grid extends React.Component {
  constructor() {
    super();
    this.ref = React.createRef();
  }
  componentDidMount() {
    this.renderAxis();
  }
  componentDidUpdate() {
    this.updateAxis();
  }
  renderAxis() {
    const node = this.ref.current;
    select(node).call(gridlines(this.props));
  }
  updateAxis() {
    const node = this.ref.current;
    const { t } = this.props;
    select('.grid-group').transition(t).call(gridlines(this.props))
  }
  render() {
    return (
      <g
        ref={this.ref}
        className="grid-group"
      />
    );
  }
}

export default Grid;
