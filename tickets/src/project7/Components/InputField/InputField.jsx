import React, { useState } from 'react';
import Field from '../../Field/Field';
import Input from '../Input/Input';

import validators from '../../Validators/validators';

const InputField = ( props ) => {
  const [ inputValue, setInputValue ] = useState(null);
  const {
    type, 
    placeholder
  } = props


  return (
    <Field 
      inputValue={inputValue}
      setInputValue={setInputValue}
      validators={validators}
      renderContent={Input}
      type={type}
      placeholder={placeholder}
    />
  )
};

export default InputField;