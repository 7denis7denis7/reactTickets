import SelectStyle from './Select.module.scss'

function Input(props) {

  const {value, data, action} = props;
  return (
    <select onChange={(e) => action(e.target.value)} value={value}>
      {data.map((item, index) => {
        return(
          <option value={item || ""} key={index}>{item}</option>
        )
      })}
    </select>

  );
}

export default Input;

