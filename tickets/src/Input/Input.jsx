import { useState } from 'react';
import InputStyle from './Input.module.scss'

function Input(props) {
  const {type='text', placeholder, action, value} = props;


  const handleInput = (e) => {
    const value = e.target.value;
    if(action){
      action(value)
    }
  }
  
  return (
    <input 
      className={InputStyle.input}
      type={type}
      placeholder={placeholder}
      onChange={handleInput}
      value={value || ''}
    />

  );
}

export default Input;

