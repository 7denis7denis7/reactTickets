import {useState, useCallback, useEffect} from 'react';
import WrapperStyle from './Wrapper.module.scss';
import getContact from '../request/getContact';

import List from '../List/List';
import ModalForm from '../ModalForm/ModalForm';
import DeleteContact from '../DeleteModal/DeleteModal';
import Contact from '../Contact/Contact';
import Modal from '../Modal/Modal';


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
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toggleModalDelete = useCallback(()=>{
    setModalDelete(!modalDelete);
  }, [modalDelete]);

  const addNewContact = useCallback((newContact)=>{
    setInitialValues(prev => [...prev, newContact]);
  }, [initialValues]);

  const chooseContact = useCallback((item)=> {
      setCurrentContact({...item});
  }, [currentContact])

  const goBack = () => {
    setCurrentContact(null)
  }
  
  const onDeleteSuccess = (tempContacts) => {
    toggleModalDelete();
    setCurrentContact(null);
    setInitialValues(tempContacts);
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
      <Modal isOpen={isOpen} modal={modalDelete}> 
        <ModalForm 
          isOpen={isOpen}
          onUpdateSuccessHandler={onUpdateSuccessHandler} 
          toggleModal={toggleModal} 
          addContact={addNewContact} 
          contact={currentContact}
        />
        <DeleteContact 
          modal={modalDelete} 
          toggleModal={toggleModalDelete}
          current={currentContact} 
          initialValues={initialValues} 
          onDeleteSuccess={onDeleteSuccess}
      /> 
      </Modal>
    </div>
  );
}

export default Wrapper;