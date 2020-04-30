// With reference from https://codesandbox.io/s/react-graph-vis-example-bxq97?file=/src/ForceGraph.js:87-103

import React, { Component } from "react";
import Graph from "react-graph-vis";
import "./vis-network.css";

class ForceGraph extends Component {
  constructor() {
    super();
    this.styles = `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'>
  <p style='margin:0;'>Connect</p>
    </div>`;
    this.state = {
      options: {
        layout: {
        },
        edges: {
          color: "#000000"
        },
        nodes: {
          color: "#888f99"
        },
        physics: {
          enabled: false
        },
        interaction: { multiselect: false, dragView: false }
      },
      graph: {
        nodes: [
          { id: 1, label: "Case 1", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 2, label: "Case 2", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 3, label: "Case 3", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 4, label: "Case 4", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 5, label: "Case 5", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 6, label: "Case 6", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 7, label: "Case 7", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 8, label: "Case 8", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 9, label: "Case 9", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 10, label: "Case 10", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 11, label: "Case 11", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 12, label: "Case 12", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 13, label: "Case 13", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 14, label: "Case 14", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 15, label: "Case 15", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 16, label: "Case 16", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 17, label: "Case 17", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 18, label: "Case 18", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 19, label: "Case 19", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 20, label: "Case 20", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 21, label: "Case 21", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 22, label: "Case 22", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 23, label: "Case 23", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 24, label: "Case 24", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 25, label: "Case 25", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 26, label: "Case 26", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 27, label: "Case 27", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 28, label: "Case 28", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 29, label: "Case 29", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 30, label: "Case 30", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 31, label: "Case 31", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 32, label: "Case 32", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 33, label: "Case 33", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 34, label: "Case 34", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 35, label: "Case 35", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 36, label: "Case 36", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 37, label: "Case 37", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 38, label: "Case 38", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 39, label: "Case 39", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 40, label: "Case 40", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 41, label: "Case 41", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 42, label: "Case 42", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 43, label: "Case 43", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 44, label: "Case 44", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 45, label: "Case 45", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 46, label: "Case 46", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 47, label: "Case 47", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 48, label: "Case 48", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 49, label: "Case 49", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
          { id: 50, label: "Case 50", title: `<div style='text-align: left;word-wrap:break-word;word-break:break-all;padding:0;margin:0;font-size:40px;'> <p style='margin:0;'>Father to case 1</p> </div>`},
        ],
        edges: [
          { from: 1, to: 3 },
          { from: 2, to: 13 },
          { from: 3, to: 1 },
          { from: 4, to: 11 },
          { from: 8, to: 9 },
          { from: 11, to: 4 },
          { from: 12, to: 8 },
          { from: 13, to: 2 },
          { from: 13, to: 26 },
          { from: 13, to: 44 },
          { from: 18, to: 12 },
          { from: 19, to: 21 },
          { from: 19, to: 27 },
          { from: 19, to: 28 },
          { from: 21, to: 19 },
          { from: 24, to: 25 },
          { from: 25, to: 24 },
          { from: 26, to: 13 },
          { from: 26, to: 44 },
          { from: 27, to: 19 },
          { from: 28, to: 19 },
          { from: 44, to: 13 },
          { from: 44, to: 26 },
        ]
      }
    };
    this.nodeSet = [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17];
    this.topoInterval = null;
  }

  componentDidMount() {
    document.addEventListener("mousedown", e => {});
    document.addEventListener("mousemove", e => {});
  }

  events = {
    dragStart: event => {},
    dragEnd: event => {}
  };
  componentWillUnmount() {
    clearInterval(this.topoInterval);
  }

  render() {
    return (
      <div id="graph" style={{ height: "1500px"}}>
        <Graph
          graph={this.state.graph}
          options={this.state.options}
          events={this.state.events}
          getNetwork={network => {
            //  if you want access to vis.js network api you can set the state in a parent component using this property
            this.node = [];
            this.topoInterval = setInterval(() => {
              var item = this.nodeSet[
                Math.floor(Math.random() * this.nodeSet.length)
              ];
          
              network.selectNodes([item], true);
              const positions = network.getPositions([item]);
              const DOMpositions = network.canvasToDOM(positions[item]);
              this.node.push(DOMpositions);
              if (this.node.length >= 2) {
                const node = this.node.shift();
                console.log("clear", node);
                network.interactionHandler._checkHidePopup(DOMpositions);
              }
              network.interactionHandler._checkShowPopup(DOMpositions);
            }, 2000);
          }}
        />
      </div>
    );
  }
}

export default ForceGraph;
