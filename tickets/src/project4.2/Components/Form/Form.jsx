import {useState, useEffect} from 'react';
import FormStyle from './Form.module.scss'

import Input from '../../../Input/Input'
import Select from '../../../Select/Select'
import Button from '../../../Button/Button'

function Form(props) {

  const departments = ['development', 'managment', 'accountant'];

  const [department, setDepartment] = useState('development');
  const [name, setName] = useState(null);

  const {addNewPerson, editPerson} = props;       


  const setNewValuesForm = (e) => {
    e.preventDefault();
    
    addNewPerson(name, department, editPerson === undefined ? null : editPerson.id);

    setName(null);

    setDepartment('development');

  }

  useEffect(()=>{
    if(editPerson){
      setDepartment(editPerson.department);
      setName(editPerson.name);
    }
  }, [editPerson])


  return (
    <div className={FormStyle.wrapper}>
      <form onSubmit={setNewValuesForm}>
        <Input
          type='text'
          placeholder='Name'
          action={setName}
          value={name}
        />
        <Select 
          value={department}
          data={departments}
          action={setDepartment}
        />
        <Button 
          type='submit'
          text={editPerson ? 'Сохранить' : 'Добавить сотрудника'}
        /> 
      </form>
    </div>
  );
}

export default Form;