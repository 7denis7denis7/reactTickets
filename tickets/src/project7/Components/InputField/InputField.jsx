import React, { useState } from 'react';
import Field from '../../Field/Field';
import Input from '../Input/Input';

import validators from '../../Validators/validators';

const InputField = ( props ) => {
  const [ inputValue, setInputValue ] = useState(null);
  const {
    type, 
    placeholder,
  } = props

  return (
    <Field 
      value={inputValue}
      onChange={setInputValue}
      validators={validators}
      component={(props) => <Input placeholder={placeholder} type={type} {...props} />}
    />
  )
};

export default InputField;