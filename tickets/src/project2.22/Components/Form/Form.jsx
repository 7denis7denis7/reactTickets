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
      const id = nextId();
      return (
        <div className={FormStyle.form}>
          <form onSubmit={(e) => this.props.addNewPerson(this.state.name, this.state.gender, this.state.age, id, e)}>
            <input className={FormStyle.input} value={this.state.name || ''} onChange={this.handleInput} placeholder='Имя' name='name' type='text'/>
            <input className={FormStyle.input} value={this.state.gender || ''} onChange={this.handleInput} placeholder='Пол' name='gender' type='text'/>
            <input className={FormStyle.input} value={this.state.age || ''} onChange={this.handleInput} placeholder='Возраст' name='age' type='number'/>
            <button className={FormStyle.button}>Добавить гостя</button>
          </form>
        </div>
      );
    }
}
 
export default Form;
