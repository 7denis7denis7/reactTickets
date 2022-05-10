import {useState} from 'react';
import FormStyle from './Form.module.scss';

function Form(props) {
  const [name, setName] = useState(null);
  const [gender, setGender] = useState(null);
  const [age, setAge] = useState(null);

  const submitForm = (e) => {
    e.preventDefault();
    const {addNewPerson} = props;
    addNewPerson(name, gender, age);
  }

  return (
    <form>
        <input
        onChange={e => setName(e.target.value)}
        value={name || ''}
        type="text"          
        />
        <input 
        onChange={e => setGender(e.target.value)}
        value={gender || ''}
        type="text"
        />
        <input
        onChange={e => setAge(e.target.value)}
        value={age || ''}
        type="number"/>
        <button onClick={submitForm}>
          Добавить
        </button>
    </form>
  );
}

export default Form;