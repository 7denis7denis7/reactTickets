import React from 'react';
import '../CommonStyles/CommonStyles.css'

const Input = (props) => {
  const {
    inputValue,
    handleChange,
    invalid,
    type='text',
    placeholder="Enter number"
  } = props;

  return (
    <input
      className={`input ${invalid ? 'error' : ''}`}
      type={type}
      placeholder={placeholder}
      value={inputValue || ''}
      onChange={handleChange}
    />
  )
}

export default Input;