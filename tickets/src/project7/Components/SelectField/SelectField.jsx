import React, { useState } from 'react';
import Field from '../../Field/Field';
import Select from '../Select/Select';

import validators from '../../Validators/validators';

const SelectField = () => {
  const [ inputValue, setInputValue ] = useState(null);

  return (
    <Field 
      value={inputValue}
      onChange={setInputValue}
      validators={validators}
      component={Select}
    />
  )
};

export default SelectField;