import ReactDom from 'react-dom';
import {useState, useMemo, useEffect} from 'react';
import ModalFormStyle from './ModalForm.module.scss';
import postContact from '../request/postContact';
import putContact from '../request/putContact';

import Button from '../../../Button/Button';

import Modal from '../Modal/Modal';


function ModalForm(props) {
  const {toggleModal, onSuccessAdded, contact, onUpdateSuccessHandler, isOpenModal} = props;

  const [firstName, setName] = useState('');
  const [lastName, setSurname] = useState('');
  const [phone, setNumber] = useState('');


  const regNumber = useMemo(()=> {
    return /^\+[0-9]{12}$/;
  }, [])

  const validateName = (str) => str.length > 0 && str.length < 10;
  const validateSurname = (str) => str.length > 0 && str.length < 20;
  const validatePhone = (str) => regNumber.test(str);


  const submitForm = (e) => {
    e.preventDefault();
    if(validateName(firstName) && validateSurname(lastName) && validatePhone(phone)){
      if(onSuccessAdded){
        const newContact = {firstName, lastName, phone, id: new Date().getTime()};
        postContact(newContact)
        .then(function (response) {
          onSuccessAdded(newContact);
          toggleModal();
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    }else{
      alert('Check the validity of the entered values');
    }
  }

  const updatedContacts = (e) => {
    e.preventDefault();
    if(validateName(firstName) && validateSurname(lastName) && validatePhone(phone)){
      const updated = {firstName, lastName, phone}
      putContact(updated, contact.id)
      .then(function (response) {
        onUpdateSuccessHandler(updated, contact.id);
      })
      .catch(function (error) {
        console.log(error);
      });
      toggleModal();
    }else{
      alert('Check the validity of the entered values');
    }
  } 

  const setInputsState = (e, seterState) => {
    const clearValue = e.target.value.trim('');
    seterState(clearValue);
  }


  useEffect(()=>{
    if(contact){
      const {firstName, lastName, phone} = contact;
      setName(firstName);
      setSurname(lastName);
      setNumber(phone);
    }else{
      setName('');
      setSurname('');
      setNumber('');
    }
  }, [contact])

  return (
    isOpenModal ? 
      <Modal toggleModal={toggleModal}>
        <form>
          <label htmlFor="name">Name</label>
          <input id="name" value={firstName} onChange={(e) => setInputsState(e, setName)} type="text"/>
          <label htmlFor="surname">Surname</label>
          <input id="surname" value={lastName} onChange={(e) => setInputsState(e, setSurname)} type="text"/>
          <label htmlFor="number">Number</label>
          <input id="number" value={phone} onChange={(e) => setInputsState(e, setNumber)} type="text"/>
          {
            contact && <Button text="Update" action={(e) => updatedContacts(e)} type="button" name="button123" className={ModalFormStyle.modal__btn}/>
          }
          {
            !contact && <Button text="Save" action={(e) => submitForm(e)} type="submit" name="button12" className={ModalFormStyle.modal__btn}/>
          }
        </form>  
      </Modal>
    :
    null
  )
}

export default ModalForm;