// With reference from https://jsbin.com/jalex/1/edit?js,output
import React from 'react';
import { select, event } from 'd3-selection';
import { transition } from 'd3-transition';

class RightBar extends React.Component {
  constructor() {
    super();
    this.ref = React.createRef();
  }
  componentDidMount() {
    this.init();
  }
  componentDidUpdate() {
    this.barTransition();
  }
  barTransition() {
    const node = this.ref.current;
    const { xScale, height, data, t } = this.props;

    select(node)
      .selectAll('.bar')
      .data(data)
      .transition(t)
      .attr('height', 20)
      .attr('x', 750)
  }
  init() {
    const {
      xScale, yScale, data, height,
    } = this.props;
    const node = this.ref.current;

    // prepare initial data from where transition starts.
    const initialData = data.map(obj => ({
      group: obj.group,
      female: 0
    }));

    // prepare the field
    const bar = select(node)
      .selectAll('.bar')
      .data(initialData);

    // add rect to svg
    bar
      .enter()
      .data(data)
      .append('rect')
      .attr('class', 'bar')
      .attr('x', height)
      .attr('y', d => yScale(d.group)+25)
      .attr('width',  d => xScale(d.female))

    this.barTransition();
  }
  render() {
    return (
      <g
        className="bar-group-female"
        ref={this.ref}
      />
    );
  }
}

export default RightBar;
