import {useState} from 'react';
import nextId from "react-id-generator";

import WrapperStyle from './Wrapper.module.scss';

import Table from '../Table/Table';
import Form from '../Form/Form';


function Wrapper() {
  const [list, setList] = useState([
    {name: 'John', gender: 'male', age: 10, visit: false, id: 1},
    {name: 'James', gender: 'male', age: 70, visit: false, id: 2},
  ]);


  const isVisit = (id) => {
    const tmpData = list.map(item => {
      if(item.id === id){
        item.visit = !item.visit;
        return {...item}
      }else{
        return item;
      }
    })

    setList(() => {
      return tmpData
    })
  }

  const addNewPerson = (name, gender, age) => {
    const newPerson = {
      name,
      gender,
      age,
      id: nextId(),
      visit: false
    }
    setList((prevState) => {
      return [
        ...prevState,
        newPerson
      ]
    })
  }

  return (
    <div className={WrapperStyle.container}>
      <Table
      list={list}
      isVisit={isVisit}
      />
      <Form 
      addNewPerson={addNewPerson}
      />
    </div>
  );  
}

export default Wrapper;