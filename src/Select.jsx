import React from 'react';
import countryList from './Code';
import Opt from './opt';
// import "./select.css";

const Select = (props) => {

  return (
    <div className={props.class} >
        <div className="lblImg">
        <label htmlFor={props.id}>{props.label}</label>
        <img src={props.img} alt=''/>
        </div>
        <select name={props.id} id={props.id} defaultValue={props.code} onChange={(evt) => props.onchange(evt)}>
            {Object.keys(countryList).map((codee,index) => {
                // codee === "USD"
                return (<Opt 
                  key={index}
                  code = {codee} 
                  // condition = {(codee === "USD" && props.id === "from") || (codee === "INR" && props.id === "to")}
                />)
            })}
        </select>
    </div>
  )
}

export default Select