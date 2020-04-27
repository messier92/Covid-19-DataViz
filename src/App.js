import React, {Component} from 'react';
import './App.css';
import SimpleGraphs from './components/SimpleGraphs';

class App extends Component {

  render() {
    return (
      <div className="App">

      <header className="App-header">
      <h1 className="App-title">Covid-19 Data Visualisation - The first 200 cases</h1>
      <h3 className="App-title">by Goh Han Long, Eugene</h3>
      </header>

      <SimpleGraphs/>
    
      

      </div>
    );
  }
}
export default App;
