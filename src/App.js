import './App.css';
import React, { Component } from 'react'
import TaxChecker from './components/pages/taxChecker'



export class App extends Component {

  render() {
    return (
      <div className="container">
        <TaxChecker />
      </div>
    )
  }
}

export default App;
