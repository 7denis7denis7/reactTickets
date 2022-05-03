import {Component} from 'react';
import FormStyle from './Form.module.scss';

class Form extends Component {
    constructor(props) {
      super(props);

      this.state = {
        name: null,
        department: 'development',
      }
    }

    setNewValuesForm = (e) => {
      e.preventDefault();
      const {name, department} = this.state;
      const {addNewPerson, editPerson} = this.props;
      if(editPerson === undefined){
        addNewPerson(name, department, null);
      }else{
        addNewPerson(name, department, editPerson.id);
      }
      this.setState({
        name: null,
        department: 'development'
      })
    }

    componentDidUpdate(prevProps) {
      const {editPerson} = this.props;
      if(editPerson !== prevProps.editPerson){
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
      const {editPerson} = this.props;
      return (
        <div className={FormStyle.form}>
          <form onSubmit={this.setNewValuesForm}>
            <input className={FormStyle.input} value={name || ''} required onChange={this.handleElement} placeholder='Имя' name='name' type='text'/>
            <select name="department" value={department} className={FormStyle.select} name='department' onChange={this.handleElement}>
              <option value="development">
                development
              </option>
              <option value="accounting">
                accounting
              </option>
              <option value="management">
                management
              </option>
            </select>
            <button className={FormStyle.button}>{editPerson ? 'save' : 'Добавить гостя'}</button>
          </form>
        </div>
      );
    }
}
 
export default Form;
