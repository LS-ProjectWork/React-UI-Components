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
  render() {
    return (
      <div>
        <CalculatorDisplay display={this.state.totalDisplay} />
        <NumberButton buttonStyle="btn-wide" text={'clear'} />
        {numbers.map(num => <NumberButton text={num}/>)}
        <NumberButton buttonStyle="btn-wide" text={0} />
      </div>
    );
  }
}

export default App;
