import {useState} from 'react';
import FormStyle from './Form.module.scss';
import Input from '../../../Input/Input'
import Button from '../../../Button/Button'
import Select from '../../../Select/Select'

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
        value={name}
        action={setName}
      />
      <Select 
        value={gender || ''}
        action={e => setGender(e.target.value)}
        data={['male', 'female']}
      />
      <Input 
        type='number'
        placeholder='Возраст'
        value={age}
        action={setAge}
      />
      <Button
        text='Добавить'
        action={submitForm}
      />
    </form>
  );
}

export default Form;