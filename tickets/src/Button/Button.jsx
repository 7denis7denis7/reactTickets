import { useState } from 'react';
import ButtonStyle from './Button.module.scss'

function Input(props) {
  
  const {text, type='button', action, name, className=''} = props

  return (
    <button
      className={className}
      type={type} 
      onClick={action} 
      name={name}
    >
      {text}
    </button>
  );
}

export default Input;

