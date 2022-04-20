import {Component} from 'react';
import nextId from "react-id-generator";
import Table from '../Table/Table'
import Form from '../Form/Form'
import Modal from '../Modal/Modal'

import WrapperStyle from './Wrapper.module.scss';

class Wrapper extends Component {
  constructor(props) {
    super(props);

    this.setDefaultLS();
    
    this.state = {
      data : [],
      editable: null,
      deleted: null,
      openModal: false,
      finded: []
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
          alert('Локальное хранилище переполнено');
        }
      }
    }
  }

  getLS = (key) => {
    if(typeof(Storage) !== 'undefined'){
      return localStorage.getItem(key);
    }
  }

  setDefaultLS = () => {
    if(typeof(Storage) !== 'undefined'){
      if (this.getLS('data') === null) {
        const dataArr =  [
          {name: 'Lorem', department: 'разработка', id: 1},
          {name: 'Abilisk', department: 'бухгалтерия', id: 2},
          {name: 'Morem', department: 'менеджмент', id: 3}
        ]
        this.setLS('data', dataArr);
      }
    }
  }


  setDefaultState = () => {
    let data = this.getLS('data');
    data = JSON.parse(data);   
    this.setState({
      data: data  
    })
  }

  addNewPerson = (name, department, id) => {
    const {data} = this.state;
    let currentData = [...data];
    if(!id){
      const newPerson = {
        name,
        department,
        id: nextId(),
        visit: false
      }
      currentData.push(newPerson);
    }else{
      currentData = data.map(item => {
        if(item.id === id){
          item.name = name;
          item.department = department;
          return {...item};
        }else{
          return item;
        }
      })
    }
    this.setState(() => {
      return {
        data: [...currentData],
        editable: null
      };
    })
  }

  findEmployee = (e) => {
    const {data} = this.state;
    let val = e.target.value.trim('').toLocaleLowerCase();
    if(val.length > 0){
      const tmpFinded = [];
      // Могу ли я использовать forEach? 
      // По идее я не изменяю элементы массива
      //  *************************************************************
      //  *  data.forEach(item => {                                   *
      //  *   if(item.name.toLocaleLowerCase().search(val) !== -1){   *
      //  *      tmpFinded.push(item.id)                              *
      //  *    }                                                      *
      //  *  })                                                       *
      //  *************************************************************                                           
      const tmpData = data.map(item => {
        if(item.name.toLocaleLowerCase().search(val) !== -1){
          tmpFinded.push(item.id)
        }
        return item;
      });


      this.setState({
        finded: [...tmpFinded]
      })
    }else{
      this.setState({finded: []})
    }
  }

  setId = (e, id) => {
    this.setState({
      [e.target.name] : id
    })
  }

  closeModal = (e) => {
    if(e.target.name === 'close'){
      this.setState({
        deleted: null
      })
    }
  }

  deleteEmploeeFromData = (e, id) => {
    if(e.target.name === 'confirm'){
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
  }

  render() { 
    const {data, editable, deleted, finded} = this.state;

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
          findEmployee={this.findEmployee}
          data={data}
          setId={this.setId}
          finded={finded}
        />
        <Form 
          addNewPerson={this.addNewPerson}
          editable={editable}
          editPerson={editPerson}
        />
        <Modal 
        deleted={deleted}
        closeModal={this.closeModal}
        deletePerson={deletePerson}
        deleteEmploeeFromData={this.deleteEmploeeFromData}
        />
      </div>
    );
  }
}
 
export default Wrapper;