import {useState, useEffect} from 'react';

import WrapperStyle from './Wrapper.module.scss';

import Table from '../Table/Table'
import Form from '../Form/Form'
import Modal from '../Modal/Modal'


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


function Wrapper() {
  const [dataBase, setdataBase] = useState(()=>{
    let data = getLS('data');
    if(data === null){
      return [];
    }else{
      return data;
    }
  });
  const [editable, setEditable] = useState(null);
  const [deleted, setDeleted] = useState(null);
  const [currentId, setCurrentId] = useState(1);


  const setDefaultState = () => {
    let data = getLS('data');
    if(data === null){
      setLS('data', [])
    }else{
      const idFromStorage = new Date().getTime();
      if(idFromStorage){
        setCurrentId(idFromStorage);
      }
      setdataBase(data);
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

    setEditable(null);
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

  const personToDelete = dataBase.find((item)=>{
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

    setDeleted(null);
    setEditable(null);
  }


  useEffect(()=>{
    setDefaultState();
  },[])

  useEffect(()=> {
    setLS('data', dataBase);
  }, [dataBase])


  return (  
    <div className={WrapperStyle.container}>
      <Table
        dataBase={dataBase}
        setId={setId}
      />
      <Form
        addNewPerson={addNewPerson}
        editPerson={editPerson}
      />
      <Modal 
        closeModal={closeModal}
        personToDelete={personToDelete}
        deleteEmploeeFromData={deleteEmploeeFromData}
      />
    </div>
  );  
}

export default Wrapper;