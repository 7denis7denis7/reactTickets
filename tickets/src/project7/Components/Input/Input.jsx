import React from 'react';
import '../CommonStyles/CommonStyles.css'

const Input = (props) => {
  const {
    value,
    onChange,
    invalid,
    type='text',
    placeholder="Enter number"
  } = props;

  return (
    <input
      className={`input ${invalid.length ? 'error' : ''}`}
      type={type}
      placeholder={placeholder}
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default Input;