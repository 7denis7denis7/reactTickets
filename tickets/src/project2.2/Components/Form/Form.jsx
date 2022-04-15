import {Component} from 'react';
import FormStyle from './Form.module.scss';
import nextId from "react-id-generator";

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
    
 
    render() { 
      const {name, gender, age} = this.state;
      return (
        <div className={FormStyle.form}>
          <form onSubmit={(e) => this.props.addNewPerson(name, gender, age, nextId(), e)}>
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
