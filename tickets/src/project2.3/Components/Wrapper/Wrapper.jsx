import {Component} from 'react';
import nextId from "react-id-generator";
import SearchBar from '../SearchBar/SearchBar'
import TableHead from '../TableHead/TableHead'
import TableBody from '../TableBody/TableBody'
import Form from '../Form/Form'

import WrapperStyle from './Wrapper.module.scss';


class Wrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {name: 'Lorem', department: 'разработка', id: 1, 'find': false},
        {name: 'Abilisk', department: 'бухгалтерия', id: 2, 'find': false},
        {name: 'Morem', department: 'менеджмент', id: 3, 'find': false}
      ],
      editable: null,
      deleted: null,
    }
  }
  
  addNewPerson = (name, department, id, e) => {
    e.preventDefault();
    if(!id){
      const newPerson = {
        name,
        department,
        id: nextId(),
        visit: false
      }
      this.setState((state) => {
        return {
          data: [...state.data, newPerson]
        };
      })
    }else{
      const currentPersonObject = this.state.data.map((item)=>{
        if(item.id === id){
          item.name = name;
          item.department = department;
        }
        return item;
      })
      this.setState(() => {
        return {
          data: currentPersonObject
        };
      })
    }
    
    
  }

  findEmployee = (e) => {
    const tmpData = this.state.data.map(i => ({...i}));
    let val = e.target.value.trim('');
    if(val.length > 0){
      tmpData.forEach(item => {
        if(item.name.search(val) == -1){
          console.log('ne naideno');
          item.find = false;
        }else{
          console.log(`naideno - ${item.id}`);
          item.find = true;
        }
      })
      this.setState((state) => {
        return {
          data: tmpData
        };
      })
    }else{
      tmpData.forEach(item => {
        item.find = false;
      })
      this.setState((state) => {
        return {
          data: tmpData
        };
      })
    }
  }


  editEmploee = (id) => {
    this.setState({
      editable: id
    })
  }




  render() { 
    //Получаю конкретный обьект человека по id 
    const currentPersonObject = this.state.data.find((item)=>{
      if(item.id === this.state.editable){
        return item;
      }
    })
    return (
      <div className={WrapperStyle.container}>
        <h1 className={WrapperStyle.title}>Панель администратора</h1>
        <SearchBar findEmployee={this.findEmployee}/>
        <table className={WrapperStyle.table}>
          <TableHead />
          <TableBody
            data={this.state.data}
            editEmploee={this.editEmploee}
          />
        </table>
        <Form 
          addNewPerson={this.addNewPerson}
          editable={this.state.editable}
          currentPersonObject={currentPersonObject}
        />
      </div>
    );
  }
}
 
export default Wrapper;