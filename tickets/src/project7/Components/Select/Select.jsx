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
    onChange,
    invalid
  } = props;


  const handleChange = (e) => {
    if(e.length){
      let arr = [];
      e.forEach(item => {
        arr.push(item.value);
      })
      onChange([...arr])
    }

    if(e.value){
      onChange(e.value);
      return;
    }

  }

  return (
    <SelectReact
      // Заменить isMulti на true, тогда значением будет массив который будет прогоняться в validator.js
      isMulti={false}
      className={`select ${invalid.length ? 'selectError' : ''}`}
      defaultValue={value}
      onChange={(e) => handleChange(e)}
      options={options}
    />
  )
}

export default Select;