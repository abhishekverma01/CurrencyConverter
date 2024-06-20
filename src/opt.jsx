import React from 'react'

const Opt = (props) => {
  return (
    <option selected={props.condition}>{props.code}</option>
  )
}

export default Opt