import React from 'react';
import "./App.css";
import Select from './Select';

const App = () => {
  return (
    <div className='main'> 
        <h2>Currency Converter</h2>
        <div className="calc">
          <div className="amount">
          <input type="text" placeholder='Amount'/>
          </div>
          <div className="selectContainer">
            <Select 
              class="fromContainer"
              id = "from"
              label="From"
              img="https://flagsapi.com/US/flat/64.png"
            />
            <Select 
              class="toContainer"
              id = "to"
              label="To"
              img="https://flagsapi.com/IN/flat/64.png"
            />
          </div>
          <div className="convert">
            <div className="ratePara">
            <p className='erate'>Exchange Rate</p>
            <p className='rate'>0.00</p>
            </div>
            <button>Convert</button>
          </div>
        </div>
    </div>
  )
}

export default App;
