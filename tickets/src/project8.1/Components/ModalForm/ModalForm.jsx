import {useState, useMemo, useEffect} from 'react';
import ModalFormStyle from './ModalForm.module.scss';
import postContact from '../request/postContact';
import putContact from '../request/putContact';
import Button from '../../../Button/Button';
import Modal from '../Modal/Modal';
import { useDispatch } from 'react-redux';
import { addContactAction, editContactAction } from '../../store/contactReducer';


function ModalForm(props) {
  const {toggleModal, currentContact, isOpenModal} = props;

  const dispatch = useDispatch();

  const [firstName, setName] = useState('');
  const [lastName, setSurname] = useState('');
  const [phone, setNumber] = useState('');


  const regNumber = useMemo(()=> {
    return /^\+[0-9]{12}$/;
  }, [])

  const validateName = (str) => str.length > 0 && str.length < 10;
  const validateSurname = (str) => str.length > 0 && str.length < 20;
  const validatePhone = (str) => regNumber.test(str);
  
  const addContact = (contact) => {
    dispatch(addContactAction(contact))
    toggleModal()
  }


  const submitForm = (e) => {
    e.preventDefault();
    if(validateName(firstName) && validateSurname(lastName) && validatePhone(phone)){
      const newContact = {firstName, lastName, phone, id: new Date().getTime()};
      postContact(newContact)
      .then(function () {
        addContact(newContact);
      })
      .catch(function (error) {
        console.log(error);
      });
    }else{
      alert('Check the validity of the entered values');
    }
  }

  const updatedContacts = (e) => {
    e.preventDefault();
    if(validateName(firstName) && validateSurname(lastName) && validatePhone(phone)){
      const updated = {firstName, lastName, phone}
      putContact(updated, currentContact.id)
      .then(function () {
        dispatch(editContactAction({contact: updated, id: currentContact.id}))
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
    if(currentContact){
      const {firstName, lastName, phone} = currentContact;
      setName(firstName);
      setSurname(lastName);
      setNumber(phone);
    }else{
      setName('');
      setSurname('');
      setNumber('');
    }
  }, [isOpenModal, currentContact])

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
            currentContact && <Button text="Update" action={(e) => updatedContacts(e)} type="button" name="button123" className={ModalFormStyle.modal__btn}/>
          }
          {
            !currentContact && <Button text="Save" action={(e) => submitForm(e)} type="submit" name="button12" className={ModalFormStyle.modal__btn}/>
          }
        </form>  
      </Modal>
    :
    null
  )
}

export default ModalForm;