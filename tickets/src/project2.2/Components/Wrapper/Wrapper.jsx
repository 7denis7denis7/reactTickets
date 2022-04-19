import {Component} from 'react';
import nextId from "react-id-generator";
import TableHead from '../TableHead/TableHead'
import TableBody from '../TableBody/TableBody'
import Form from '../Form/Form'

import WrapperStyle from './Wrapper.module.scss';

class Wrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {name: 'Lorem', gender: 'male', age: 10, visit: false, id: 1},
        {name: 'Abilisk', gender: 'male', age: 100, visit: false, id: 2},
        {name: 'Morem', gender: 'male', age: 90, visit: false, id: 3}
      ]
    }
  }
  isVisit = (id) => {
    this.setState((state) => {  
      const tmpData = state.data.map(item => {
        if(item.id === id){
          item.visit = !item.visit;
          return {...item}
        }else{
          return item
        }
      });
        return {
          data: tmpData
        };
      })
}

  
  addNewPerson = (name, gender, age, e) => {
    e.preventDefault();
    const newPerson = {
      name,
      gender,
      age,
      id: nextId(),
      visit: false
    }
    this.setState((state) => {
      return {
        data: [...state.data, newPerson]
      };
    })
  }

  render() { 
    return (
      <div className={WrapperStyle.container}>
        <table className={WrapperStyle.table}>
          <TableHead />
          <TableBody
            data={this.state.data}
            isVisit={this.isVisit}
          />
        </table>
        <Form 
          addNewPerson={this.addNewPerson}
        />
      </div>
    );
  }
}
 
export default Wrapper;