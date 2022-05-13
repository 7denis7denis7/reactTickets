import {useState, useEffect} from 'react';

import WrapperStyle from './Wrapper.module.scss';

import Table from '../Table/Table'
import Form from '../Form/Form'


function Wrapper() {
  const [dataBase, setdataBase] = useState([]);
  const [editable, setEditable] = useState([]);
  const [deleted, setDeleted] = useState([]);

  //Имитация смонтированого компонента 
  useEffect(()=>{
    console.log('render')
    setDefaultState();
  },[])

  const setDefaultState = () => {
    let data = getLS('data');
    if(data === null){
      setLS('data', [])
    }

    setdataBase(data);
  }

  const getLS = (key) => {
    if(typeof(Storage) !== 'undefined'){
      try {
        return JSON.parse(localStorage.getItem(key)); ;
      }catch (e) {
        if (e.number == 22) { 
          alert('Что-то пошло не так');
        }
      }
    }
  }

  const setLS = (key, value) => {
    if(typeof(Storage) !== 'undefined'){
      try {
        localStorage.setItem(key, JSON.stringify(value));
      }catch (e) {
        if (e.number == 22) { 
          alert('Что-то пошло не так');
        }
      }
    }
  }

  




  return (  
    <div className={WrapperStyle.container}>
      <Table
      dataBase={dataBase}
      />
      <Form/>
    </div>
  );  
}

export default Wrapper;