import React, { useState } from 'react';
import "./App.css";
import './mediaQuery.css';

import Select from './Select';
import countryList from './Code';
import shadows from './shadows'

const App = () => {
  const [shady, setShadow] = useState('');
  const [number, setNumber] = useState('');
  const [rateText, setRateText] = useState('0.00');
  const [cntry, setCntry] = useState(['USD','INR']);
  const api_key = process.env.REACT_APP_CURRENCY_API_KEY;
  const url = `https://v6.exchangerate-api.com/v6/${api_key}/pair/${cntry[0]}/${cntry[1]}`;

  
  const handleInputChange = (event) => {
    const value = event.target.value;
    // const intValue = parseInt(value, 10);
    // if (intValue < 1) {
    //   setNumber(1);
    // } else if (isNaN(intValue)) {
    //   setNumber('');
    // } else {
    //   setNumber(intValue);
    // }
    // const nv = value.replace(/\D/g, '');
    setNumber(value);
  };
   function handleChange(evt){
      const newVal = evt.target.value;
      const name = evt.target.name;
      name === 'from' ? setCntry((prevVal) => {
            return [newVal,prevVal[1]]
      }) : setCntry((prevVal) => {
        return [prevVal[0],newVal]
  })
   }
   async function giveExchange() {
      try{
        const res = await fetch(url);
        const data = await res.json();
        if(data.result === 'error'){
          alert('Not Found');
          setRateText('Not Found');
        }
        else{
        const finalCrate = await data.conversion_rate;
        console.log(finalCrate);
        if(number === ''){
          setRateText(finalCrate);
          setNumber(1);
        }
        else {
        // console.log(number*finalCrate);
        setRateText(number*finalCrate);
        }
        console.log(number);
        }
      }
      catch(err){
        alert(err);
      }
      // for shadow change
      const len = shadows.length;
      const random = Math.floor(Math.random()*len);
      setShadow(shadows[random]);
   }
  return (
    <div className='main' style={{boxShadow: shady}}> 
        <h2>Currency Converter</h2>
        <div className="calc">
          <div className="amount">
          <input type="number" min="1"  placeholder='Amount' defaultValue={number} onChange={handleInputChange}/>
          </div>
          <div className="selectContainer">
            <Select 
              key={1}
              code="USD"
              onchange={handleChange}
              class="fromContainer"
              id = "from"
              label="From"
              img={`https://flagsapi.com/${countryList[cntry[0]]}/flat/64.png`}
            />
            <Select
              key={2}
              code="INR"
              onchange={handleChange}
              class="toContainer"
              id = "to"
              label="To"
              img={`https://flagsapi.com/${countryList[cntry[1]]}/flat/64.png`}
            />
          </div>
          <div className="convert">
            <div className="ratePara">
            <p className='erate'>Exchange Rate</p>
            <p className='rate'>{rateText}</p>
            </div>
            <button onClick={giveExchange}>Convert</button>
          </div>
        </div>
    </div>
  )
}

export default App;
