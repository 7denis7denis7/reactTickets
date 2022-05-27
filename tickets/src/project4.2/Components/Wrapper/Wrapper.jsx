import {useState, useEffect} from 'react';

import WrapperStyle from './Wrapper.module.scss';

import Table from '../Table/Table'
import Form from '../Form/Form'
import Modal from '../Modal/Modal'


function Wrapper() {
  const [dataBase, setdataBase] = useState([]);
  const [editable, setEditable] = useState(null);
  const [deleted, setDeleted] = useState(null);
  const [currentId, setCurrentId] = useState(1);

  useEffect(()=>{
    setDefaultState();
  },[])


  const setDefaultState = () => {
    let data = getLS('data');
    if(data === null){
      setLS('data', [])
    }else{
      const idFromStorage = data[data.length - 1]?.id;
      if(idFromStorage){
        setCurrentId(idFromStorage + 1);
      }
      setdataBase(data);
    }

    
  }

  const getLS = (key) => {
    if(typeof(Storage) !== 'undefined'){
      try {
        return JSON.parse(localStorage.getItem(key));
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


  const addNewPerson = (name, department, id) => {
    let currentData;
    if(!id){
      const newPerson = {
        name,
        department,
        id: currentId,
        visit: false
      }
      setCurrentId(prev => prev + 1)
      currentData = [...dataBase, newPerson ]
    }else{
      currentData = dataBase.map(item => {
        if(item.id === id){
          return { ...item, name, department};
        }else{
          return item;
        }
      })
    }

    setdataBase(currentData);
    setLS('data', currentData);

    setEditable(()=>{
      return null;
    })
  }


  const setId = (elementName, id) => {
    if(elementName === 'deleted'){
      setDeleted(id)
    }else{
      setEditable(id)
    }
  }

  const closeModal = () => {
    setDeleted(null);
  }

  const editPerson = dataBase.find((item)=>{
    if(item.id === editable){
      return item;
    }
  })

  const deletePerson = dataBase.find((item)=>{
    if(item.id === deleted){
      return item;
    }
  })

  const deleteEmploeeFromData = (id) => {
    const personList = dataBase.filter(item => {
      if(item.id !== id){
        return item;
      }
    })

    setdataBase(personList);
    setLS('data', personList);

    setDeleted(null);
    setEditable(null);
  }


  return (  
    <div className={WrapperStyle.container}>
      <Table
        dataBase={dataBase}
        setId={setId}
      />
      <Form
        dataBase={dataBase}
        addNewPerson={addNewPerson}
        editPerson={editPerson}
      />
      <Modal 
        closeModal={closeModal}
        deletePerson={deletePerson}
        deleteEmploeeFromData={deleteEmploeeFromData}
      />
    </div>
  );  
}

export default Wrapper;