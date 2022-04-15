import {Component} from 'react';
import FormStyle from './Form.module.scss';

class Form extends Component {
    constructor(props) {
      super(props);

      this.state = {
        name: null,
        department: 'разработка',
      }
    }
    


    componentDidUpdate(prevProps) {
      if(this.props.editable !== prevProps.editable){
        if(this.props.currentPersonObject){
          this.setState({
            name: this.props.currentPersonObject.name,
            department: this.props.currentPersonObject.department
          })
          document.querySelector('form button').textContent = "save";
        }

      }
    }



    handleInput = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      })
    }

    handleSelect = (e) => {
      this.setState({
        department: e.target.value
      })
    } 

    render() { 
      const {name, department} = this.state;
      return (
        <div className={FormStyle.form}>
          <form onSubmit={(e) => this.props.addNewPerson(name, department, this.props.editable, e)}>
            <input className={FormStyle.input} value={name || ''} required onChange={this.handleInput} placeholder='Имя' name='name' type='text'/>
            <select name="department" value={this.state.department} className={FormStyle.select} onChange={this.handleSelect}>
              <option value="разработка">
                разработка
              </option>
              <option value="бухгалтерия">
                бухгалтерия
              </option>
              <option value="менеджмент">
                менеджмент
              </option>
            </select>
            <button className={FormStyle.button}>Добавить гостя</button>
          </form>
        </div>
      );
    }
}
 
export default Form;
