import {useState, useCallback, useEffect} from 'react';
import WrapperStyle from './Wrapper.module.scss';

import deleteFromServer from '../request/delete'

import getContact from '../request/getContact';


import List from '../List/List';
import ModalForm from '../ModalForm/ModalForm';
import DeleteContact from '../DeleteModal/DeleteModal';
import Contact from '../Contact/Contact';


function Wrapper() {
  const [modal, setModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState(null);

  const updateContacts = (obj, id) => {
    const tempContacts = contacts.map(item => {
      if(item.id === id){
        obj.id = id;
        return obj;
      }else{
        return item;
      }
    });

    setContacts(tempContacts);
  }

  const updateCurrent = (obj) => {
    setCurrentContact(obj)
  }


  const toggleModal = useCallback(()=>{
    setModal(!modal);
  }, [modal]);

  const toggleModalDelete = useCallback(()=>{
    setModalDelete(!modalDelete);
  }, [modalDelete]);

  const addNewContact = useCallback((newContact)=>{
    setContacts(prev => [...prev, ...newContact]);
  }, [contacts]);

  const chooseContact = useCallback((item)=> {
      setCurrentContact({...item});
  }, [currentContact])


  const deleteContact = (id) => {
    const tempContacts = contacts.filter(item => {
      if(item.id !== id){
        return item;
      }
    });

    deleteFromServer(id)
    .then(function (response) {})
    .catch(function (error) {
      console.log(error);
    });

    setCurrentContact(null);
    toggleModalDelete();
    setContacts(tempContacts);
  } 

  const goBack = () => {
    setCurrentContact(null)
  }

  useEffect(()=>{
    getContact()
    .then(function (response) {
      setContacts(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);

  return (
    <div className={WrapperStyle.wrapper}>
      <h2>List of contacts</h2>
      {!currentContact &&
        <List contacts={contacts} action={toggleModal} chooseContact={chooseContact}/>
      }
      {currentContact &&
        <Contact contact={currentContact} action={toggleModal} toggleModal={toggleModalDelete} goBack={goBack} />
      }
      {modal &&
        <ModalForm modal={modal} action={toggleModal} addContact={addNewContact} contact={currentContact} updateContacts={updateContacts} updateCurrent={updateCurrent}/>
      }
      <DeleteContact modal={modalDelete} toggleModal={toggleModalDelete} action={() => deleteContact(currentContact.id)}/>
    </div>
  );
}

export default Wrapper;