import styles from './Wrapper.module.scss';
import InputField from '../InputField/InputField';
import SelectField from '../SelectField/SelectField';


function Wrapper() {
  return (
    <div className={styles.wrapper}>
      <h1>HOC</h1>
      <InputField 
        placeholder="Enter text" 
      />
      <InputField 
        type="number"
        placeholder="Enter number"
      />
      <SelectField />
    </div>
  );
}

export default Wrapper;