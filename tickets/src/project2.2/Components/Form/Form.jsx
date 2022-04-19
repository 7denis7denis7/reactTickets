import {Component} from 'react';
import FormStyle from './Form.module.scss';

class Form extends Component {
    constructor(props) {
      super(props);

      this.state = {
        name: null,
        gender: null,
        age: null
      }
    }
   

    handleInput = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      })
    }
    
    submitForm = (e) => {
      const {addNewPerson, } = this.props;
      const {name, gender, age} = this.state;
      e.preventDefault();
      addNewPerson(name, gender, age);
    }
 
    render() { 
      const {name, gender, age} = this.state;
      return (
        <div className={FormStyle.form}>
          <form onSubmit={this.submitForm}>
            <input className={FormStyle.input} value={name || ''} onChange={this.handleInput} placeholder='Имя' name='name' type='text'/>
            <input className={FormStyle.input} value={gender || ''} onChange={this.handleInput} placeholder='Пол' name='gender' type='text'/>
            <input className={FormStyle.input} value={age || ''} onChange={this.handleInput} placeholder='Возраст' name='age' type='number'/>
            <button className={FormStyle.button}>Добавить гостя</button>
          </form>
        </div>
      );
    }
}
 
export default Form;
