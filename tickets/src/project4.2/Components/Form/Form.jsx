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
    if(editPerson === undefined){
      addNewPerson(name, department, null);
    }else{
      addNewPerson(name, department, editPerson.id);
    }

    setName(()=>{
      return null;
    })

    setDepartment(()=>{
      return 'development';
    })

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
        {editPerson ? 
          <Button 
            type='submit'
            text='Сохранить'
          /> 
          :
          <Button 
            type='submit'
            text='Добавить сотрудника'
          />
        }
      </form>
    </div>
  );
}

export default Form;