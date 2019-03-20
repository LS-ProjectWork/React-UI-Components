import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {totalDisplay: 0}
  }
  handleDisplay = num => {
    this.setState({totalDisplay: num})
  }
  handleReset = numb => {
    this.setState({totalDisplay: 0})
  }
  render() {
    return (
      <div>
        <CalculatorDisplay display={this.state.totalDisplay} />
        <NumberButton buttonStyle="btn-wide" handleDisplay={this.handleReset}  text={'clear'} />
        {numbers.map(num => <NumberButton handleDisplay={this.handleDisplay} text={num}/>)}
        <NumberButton buttonStyle="btn-wide" handleDisplay={this.handleDisplay} text={0} />
      </div>
    );
  }
}

export default App;
