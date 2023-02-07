function Input(props) {
  const {value, data, action} = props;

  return (
    <div>
      <select onChange={(e) => action(e.target.value)} value={value}>
        {data.map((item, index) => {
          return <option value={item || ''} key={index}>{item}</option>
        })}
      </select>
    </div>
  );
}

export default Input;

