import InputStyle from './Input.module.scss';


function Input({type, className, placeholder, value, action, min, step}) {
  return (
    <input 
      className={InputStyle.input} 
      type={type} 
      className={className}
      value={value}
      placeholder={placeholder} 
      onChange={action}
      min={min}
      step={step}
    />
  );
}

export default Input;