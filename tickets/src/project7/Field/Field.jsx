import React, { useEffect, useState } from 'react';

const Field = (props) => {
  const {
    inputValue,
    setInputValue,
    validators,
    renderContent,
    type,
    placeholder
  } = props;

  const [ invalidMessage, setInvalidMessage ] = useState(null);


  const handleChange = (event) => {
    if(event.length){
      let arr = [];
      event.forEach(item => {
        console.log(item.value)
        arr.push(item.value);
      })
      setInputValue([...arr])
    }

    if(event.value){
      setInputValue(event.value);
      return;
    }

    if(event.target?.value || event.target?.value.length === 0){
      setInputValue(event.target.value);
    }
  };


  const inputValidation = (validators, value) => {
    for (let i = 0; i < validators.length; i++){
      const checkValue = validators[i](value);

      if(checkValue !== undefined){
        setInvalidMessage(checkValue);
        break;
      }

      setInvalidMessage(null);
    }

  };

  useEffect(() => {
    inputValidation(validators, inputValue);
  }, [inputValue, validators]);

  const RenderContent = renderContent;

  return (
    <div className='row'>
      <RenderContent 
        inputValue={inputValue}
        handleChange={handleChange}
        invalid={invalidMessage}
        type={type}
        placeholder={placeholder}
      />
      
      {invalidMessage && (
        <div className='textError'>
          {invalidMessage}
        </div>
      )}
    </div>
  )
}


export default Field;