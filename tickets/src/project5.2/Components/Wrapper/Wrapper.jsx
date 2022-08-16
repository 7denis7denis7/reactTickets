import {useState, useCallback, useEffect} from 'react';
import WrapperStyle from './Wrapper.module.scss';
import getContact from '../request/getContact';

import List from '../List/List';
import ModalForm from '../ModalForm/ModalForm';
import DeleteContact from '../DeleteModal/DeleteModal';
import Contact from '../Contact/Contact';


function Wrapper() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [initialValues, setInitialValues] = useState([]);
  const [currentContact, setCurrentContact] = useState(null);

  const onUpdateSuccessHandler = (obj, id) => {
    const tempContacts = initialValues.map(item => {
      if(item.id === id){
        return {...obj, id};
      }else{
        return item;
      }
    });

    setInitialValues(tempContacts);

    setCurrentContact(obj)
  }

  const toggleModal = useCallback(()=>{
    setIsOpen(prevState => !prevState);
  }, []);

  const toggleModalDelete = useCallback(()=>{
    setModalDelete(prevState => !prevState);
  }, []);

  const addNewContact = useCallback((newContact) => {
    setInitialValues(prev => [...prev, newContact]);
  }, []) 

  const chooseContact = useCallback((item)=> {
    setCurrentContact(item);
  }, [])

  const goBack = () => {
    setCurrentContact(null);
  }
  
  const onDeleteSuccess = (tempContacts) => {
    toggleModalDelete();
    setCurrentContact(null);
    setInitialValues(tempContacts);
  }

  const deleteCurrentContact = (id) => {
    const tempContacts = initialValues.filter(item => {
      if(item.id !== id){
        return item;
      }
    });
    onDeleteSuccess(tempContacts);
  }

  useEffect(()=>{
    getContact()
    .then(function (response) {
      setInitialValues(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);

  return (
    <div className={WrapperStyle.wrapper}>
      <h2>List of contacts</h2>
      {
        currentContact ?  
          <Contact contact={currentContact} onSuccessHandler={toggleModal} toggleModal={toggleModalDelete} goBack={goBack} /> 
          : 
          <List initialValues={initialValues} onSuccessHandler={toggleModal} chooseContact={chooseContact}/>
      }
      <ModalForm 
        isOpenModal={isOpen}
        onUpdateSuccessHandler={onUpdateSuccessHandler} 
        toggleModal={toggleModal} 
        onSuccessAdded={addNewContact} 
        currentContact={currentContact}
      />
      <DeleteContact 
        isOpenModal={modalDelete} 
        toggleModal={toggleModalDelete}
        currentContact={currentContact} 
        onDeleteSuccess={onDeleteSuccess}
        deleteCurrentContact={deleteCurrentContact}
      /> 
    </div>
  );
}

export default Wrapper;