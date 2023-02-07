import React from 'react';
import SelectReact from 'react-select';
import '../CommonStyles/CommonStyles.css';

const options = [
  { value: '5', label: '5' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const Select = (props) => {
  const {
    value,
    handleChange,
    invalid
  } = props;

  return (
    <SelectReact
      // Заменить isMulti на true, тогда значением будет массив который будет прогоняться в validator.js
      isMulti={false}
      className={`select ${invalid ? 'selectError' : ''}`}
      defaultValue={value}
      onChange={handleChange}
      options={options}
    />
  )
}

export default Select;