import React, { useState } from 'react';
import Field from '../../Field/Field';
import Select from '../Select/Select';

import validators from '../../Validators/validators';

const SelectField = () => {
  const [ inputValue, setInputValue ] = useState(null);

  return (
    <Field 
      inputValue={inputValue}
      setInputValue={setInputValue}
      validators={validators}
      renderContent={Select}
    />
  )
};

export default SelectField;