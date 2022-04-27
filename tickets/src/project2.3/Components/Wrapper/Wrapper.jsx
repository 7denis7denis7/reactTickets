import {Component} from 'react';
import nextId from "react-id-generator";
import Table from '../Table/Table'
import Form from '../Form/Form'
import Modal from '../Modal/Modal'

import WrapperStyle from './Wrapper.module.scss';

class Wrapper extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data : [],
      editable: null,
      deleted: null,
      openModal: false,
    }
  }
  
  componentDidMount() {
    this.setDefaultState();
  }

  componentDidUpdate() {
    this.setLS('data', this.state.data);
  }



  setLS = (key, value) => {
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

  getLS = (key) => {
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

  setDefaultState = () => {
    let data = this.getLS('data');
    if(data === null){
      this.setLS('data', [])
    }
    this.setState({
      data  
    })
  }

  addNewPerson = (name, department, id) => {
    const {data} = this.state;
    let currentData;
    if(!id){
      const newPerson = {
        name,
        department,
        id: nextId(),
        visit: false
      }
      currentData = [...data, newPerson ]
    }else{
      currentData = data.map(item => {
        if(item.id === id){
          return { ...item, name, department};
        }else{
          return item;
        }
      })
    }
    this.setState(() => {
      return {
        data: currentData,
        editable: null
      };
    })
  }


  setId = (elementName, id) => {
    this.setState({
      [elementName] : id
    })
  }

  closeModal = () => {
    this.setState({
      deleted: null
    })
  }

  deleteEmploeeFromData = (id) => {
    const personList = this.state.data.filter(item => {
      if(item.id !== id){
        return item;
      }
    })
    this.setState(() => {
      return {
        data: personList,
        deleted: null,
        editable: null
      };
    })  
  }

  render() { 
    const {data, editable, deleted} = this.state;

    const editPerson = data.find((item)=>{
      if(item.id === editable){
        return item;
      }
    }) 

    const deletePerson = data.find((item)=>{
      if(item.id === deleted){
        return item;
      }
    })

    return (
      <div className={WrapperStyle.container}>
        <h1 className={WrapperStyle.title}>Панель администратора</h1>
        <Table 
          data={data}
          setId={this.setId}
        />
        <Form 
          addNewPerson={this.addNewPerson}
          editPerson={editPerson}
        />
        <Modal 
        closeModal={this.closeModal}
        deletePerson={deletePerson}
        deleteEmploeeFromData={this.deleteEmploeeFromData}
        />
      </div>
    );
  }
}
 
export default Wrapper;