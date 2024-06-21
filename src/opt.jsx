import React from 'react'

const Opt = (props) => {
  return (
    <option value={props.code} >{props.code}</option>
  )
}

export default Opt

// selected={props.condition}