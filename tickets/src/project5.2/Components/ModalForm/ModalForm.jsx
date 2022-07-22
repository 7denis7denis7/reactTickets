import ReactDom from 'react-dom';
import {useState, useMemo} from 'react';
import ModalFormStyle from './ModalForm.module.scss';
import cn from 'classnames';
import postContact from '../request/postContact';
import putContact from '../request/putContact';

import Button from '../../../Button/Button';

import close from '../../../icons/close.svg';


function ModalForm(props) {
  const {action, addContact, contact, updateContacts, updateCurrent} = props;

  const [firstName, setName] = useState(contact ? contact.firstName : '');
  const [lastName, setSurname] = useState(contact ? contact.lastName : '');
  const [phone, setNumber] = useState(contact ? contact.phone : '');

  const regNumber = useMemo(()=> {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  }, [])

  const validateName = (str) => {
    if(str.length > 0 && str.length < 10) return true;
    return false;
  }
  const validateSurname = (str) => {
    if(str.length > 0 && str.length < 20) return true;
    return false;
  }
  const validatePhone = (str) => {
    if (regNumber.test(str)) return true;
    return false;
  }


  const submitForm = (e) => {
    e.preventDefault();
    if(validateName(firstName) && validateSurname(lastName) && validatePhone(phone)){
      if(addContact){
        const newContact = [{firstName, lastName, phone, id: new Date().getTime()}];
        addContact(newContact);
        action();
        postContact(...newContact)
        .then(function (response) {})
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
      updateContacts(updated, contact.id);
      updateCurrent(updated);
      putContact(updated, contact.id)
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
      action();
    }else{
      alert('Check the validity of the entered values');
    }
  } 





  const setInputsState = (e, seterState) => {
    const clearValue = e.target.value.trim('');
    seterState(clearValue);
  }

  return ReactDom.createPortal(
    <div className={cn(ModalFormStyle.modal, ModalFormStyle.modal__active)}>
      <div className={ModalFormStyle.modal__wrapper}>
        <img className={ModalFormStyle.modal__close} onClick={action} src={close} alt="close"/>
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
      </div>
    </div>,
    document.getElementById('portal')
  );
}

export default ModalForm;