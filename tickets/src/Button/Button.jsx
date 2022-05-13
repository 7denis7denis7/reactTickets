import { useState } from 'react';
import ButtonStyle from './Button.module.scss'

function Input(props) {
  
  const {text, type='button', action} = props

  return (
    <button type={type} onClick={action}>
      {text}
    </button>
  );
}

export default Input;

