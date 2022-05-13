import FormStyle from './Form.module.scss'

import Input from '../../../Input/Input'
import Select from '../../../Select/Select'
import Button from '../../../Button/Button'

function Form() {
  return (
    <div>
      <form>
        <Input
          type='text'
          placeholder='Name'
        />
        <Select />
        <Button 
          type='submit'
          text='Добавить сотрудника'
        />
      </form>
    </div>
  );
}

export default Form;