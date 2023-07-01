import React from 'react'
import './input.css';

export default function Input({value, setValue}) {
  return (
    <input type="number" className='input' min="10" max="100000" onChange={(e) => setValue(e.target.value)} value={value} />
  )
}
