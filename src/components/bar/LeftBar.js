// With reference from https://stackblitz.com/edit/d3-react-bar-chart?file=index.js
import React from 'react';
import { select, event } from 'd3-selection';
import { transition } from 'd3-transition';

class LeftBar extends React.Component {
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
      .attr('x', 0)
  }
  init() {
    const {
      xScale, yScale, data, height,
    } = this.props;
    const node = this.ref.current;

    // prepare initial data from where transition starts.
    const initialData = data.map(obj => ({
      group: obj.group,
      male: 0
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
      .attr('y', d => yScale(d.group)+100)
      .attr('width',  d => xScale(d.male))
      .attr('transform', translation(750, 0) + 'scale(-1,1)');


    function translation(x,y) {
      return 'translate(' + x + ',' + y + ')';
    }

    this.barTransition();
  }
  render() {
    return (
      <g
        className="bar-group-male"
        ref={this.ref}
      />
    );
  }
}

export default LeftBar;
