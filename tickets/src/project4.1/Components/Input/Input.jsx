import InputStyle from './Input.module.scss'

function Input(props) {

  const {placeholder, type, changeValue, value} = props;

  return (
    <input 
      placeholder={placeholder}
      type={type}
      onChange={e => changeValue(e.target.value)}
      value={value}
    />

  );
}

export default Input;