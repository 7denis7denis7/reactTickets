import {Component} from 'react';
import nextId from "react-id-generator";
import SearchBar from '../SearchBar/SearchBar'
import TableHead from '../TableHead/TableHead'
import TableBody from '../TableBody/TableBody'
import Form from '../Form/Form'
import Modal from '../Modal/Modal'

import WrapperStyle from './Wrapper.module.scss';


class Wrapper extends Component {
  constructor(props) {
    super(props);
    
    if (localStorage.getItem('data') === null) {
      const dataArr =  [
        {name: 'Lorem', department: 'разработка', id: 1, 'find': false},
        {name: 'Abilisk', department: 'бухгалтерия', id: 2, 'find': false},
        {name: 'Morem', department: 'менеджмент', id: 3, 'find': false}
      ]
      localStorage.setItem('data', JSON.stringify(dataArr))
    }

    // this.state = {
    //   data: [
    //     {name: 'Lorem', department: 'разработка', id: 1, 'find': false},
    //     {name: 'Abilisk', department: 'бухгалтерия', id: 2, 'find': false},
    //     {name: 'Morem', department: 'менеджмент', id: 3, 'find': false}
    //   ],
    //   editable: null,
    //   delete: null,
    //   openModal: false
    // }

    this.state = {
      data : [],
      editable: null,
      delete: null,
      openModal: false
    }

  }
  


  componentDidMount() {
    console.log('Монтирование и послыание запроса');
    let data = localStorage.getItem('data');
    data = JSON.parse(data);
    console.log(data)
    this.setState({
      data: data  
    })
  }

  componentDidUpdate() {
    localStorage.setItem('data', JSON.stringify(this.state.data));
  }




  addNewPerson = (name, department, id) => {
    const test = [...this.state.data];
    if(!id){
      const newPerson = {
        name,
        department,
        id: nextId(),
        visit: false
      }
      test.push(newPerson);
    }else{
      test.forEach((item)=>{
        if(item.id === id){
          item.name = name;
          item.department = department;
        }
      })
    }
    this.setState(() => {
      return {
        data: [...test],
        editable: null
      };
    })
    //localstorage
  }


  findEmployee = (e) => {
    let val = e.target.value.trim('');
    if(val.length > 0){
      const tmpData = this.state.data.map(item => {
        if(item.name.toLocaleLowerCase().search(val.toLocaleLowerCase()) === -1){
          item.find = false;
        }else{
          item.find = true;
        }
        return item;
      });
      this.setState({data: tmpData})
    }else{
      const tmpData = this.state.data.map(item => {
        item.find = false;
        return item;
      });
      this.setState({data: tmpData})
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
        delete: null
      })
    }
  }

  deleteEmploeeFromData = (e, id) => {
    if(e.target.name === 'confirm'){
      //find person in dataList
      const personList = this.state.data.filter(item => {
        if(item.id !== id){
          return item;
        }
      })
      this.setState(() => {
        return {
          data: personList,
          delete: null,
          editable: null
        };
      })  
    }
  }



  render() { 
    const {data, editable} = this.state;
    //Получаю конкретный обьект человека по id 
    const editPerson = data.find((item)=>{
      if(item.id === editable){
        return item;
      }
    })

    const deletePerson = data.find((item)=>{
      console.log(data)
      if(item.id === this.state.delete){
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
            setId={this.setId}
          />
        </table>
        <Form 
          addNewPerson={this.addNewPerson}
          editable={this.state.editable}
          editPerson={editPerson}
        />
        <Modal 
        delete={this.state.delete}
        closeModal={this.closeModal}
        deletePerson={deletePerson}
        deleteEmploeeFromData={this.deleteEmploeeFromData}
        />
      </div>
    );
  }
}
 
export default Wrapper;