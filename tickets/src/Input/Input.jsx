import { useState } from 'react';
import InputStyle from './Input.module.scss'

function Input(props) {
  const {type='text', placeholder, action} = props;

  const [valueInput, setValueInput] = useState(null)

  const handleInput = (e) => {
    const value = e.target.value;
    setValueInput(value);
    action(value)
  }
  
  return (
    <input 
      className={InputStyle.input}
      type={type}
      placeholder={placeholder}
      onChange={handleInput}
      value={valueInput || ''}
    />

  );
}

export default Input;

