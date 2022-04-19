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

    setNewValuesForm = (e) => {
      e.preventDefault();
      const {name, department} = this.state;
      const {addNewPerson, editable} = this.props;
      addNewPerson(name, department, editable);
      this.setState({
        name: null,
        department: 'разработка'
      })
    }

    componentDidUpdate(prevProps) {
      const {editable, editPerson} = this.props;
      if(editable !== prevProps.editable){
        if(editPerson){
          this.setState({
            name: editPerson.name,
            department: editPerson.department
          })
        }
      }
    }

    handleElement = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      })
    }


    render() { 
      const {name, department} = this.state;
      const {editable} = this.props
      return (
        <div className={FormStyle.form}>
          <form onSubmit={this.setNewValuesForm}>
            <input className={FormStyle.input} value={name || ''} required onChange={this.handleElement} placeholder='Имя' name='name' type='text'/>
            <select name="department" value={department} className={FormStyle.select} name='department' onChange={this.handleElement}>
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
            <button className={FormStyle.button}>{editable ? 'save' : 'Добавить гостя'}</button>
          </form>
        </div>
      );
    }
}
 
export default Form;
