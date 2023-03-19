import React, { useMemo } from 'react';

const Field = (props) => {
  const {
    value,
    onChange,
    validators,
    component,
  } = props;

  const invalidMessage = useMemo(() => {
    if(validators){

      const messages = validators.map(item => {
        if(item(value)){
          return item(value);
        }
      }).filter(item => item !== undefined)


      return messages;
    }

  }, [value, validators]);

  const RenderContent = component;


  return (
    <div className='row'>
      <RenderContent 
        value={value}
        onChange={onChange}
        invalid={invalidMessage}
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