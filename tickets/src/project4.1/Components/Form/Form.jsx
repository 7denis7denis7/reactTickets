import {useState} from 'react';
import FormStyle from './Form.module.scss';
import Input from '../Input/Input'

function Form(props) {
  const [name, setName] = useState(null);
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState(null);

  const submitForm = (e) => {
    e.preventDefault();
    const {addNewPerson} = props;
    addNewPerson(name, gender, age);
  }

  return (
    <form>
      <Input
      placeholder='Имя'
      type='text'
      value={name || ''}
      changeValue={setName}
      />
      <select
      value={gender || ''}
      onChange={e => setGender(e.target.value)}>
        <option value="male">Мужской</option>
        <option value="female">Женский</option>
      </select>
      <Input
      placeholder='Возраст'
      type='number'
      value={age || ''}
      changeValue={setAge}
      />
      <button onClick={submitForm}>
        Добавить
      </button>
    </form>
  );
}

export default Form;