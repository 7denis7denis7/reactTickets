import { useState, useCallback } from 'react';
import WrapperStyle from './Wrapper.module.scss';
import List from '../List/List';
import ModalForm from '../ModalForm/ModalForm';
import DeleteContact from '../DeleteModal/DeleteModal';
import Contact from '../Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { removeContactAction } from '../../store/contactReducer';


function Wrapper() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts)

  const toggleModal = useCallback(()=>{
    setIsOpen(prevState => !prevState);
  }, []);

  const toggleModalDelete = useCallback(()=>{
    setModalDelete(prevState => !prevState);
  }, []);

  const chooseContact = useCallback((item)=> {
    setCurrentContact(item);
  }, [])

  const goBack = () => {
    setCurrentContact(null);
  }
  
  const onDeleteSuccess = (id) => {
    toggleModalDelete();
    setCurrentContact(null);
    dispatch(removeContactAction(id))
  }

  const deleteCurrentContact = (id) => {
    const tempContacts = contacts.filter(item => item.id !== id);
    onDeleteSuccess(tempContacts);
  }

  return (
    <div className={WrapperStyle.wrapper}>
      <h2>List of contacts</h2>
      {
        currentContact ?  
          <Contact contact={currentContact} onSuccessHandler={toggleModal} toggleModal={toggleModalDelete} goBack={goBack} /> 
          : 
          <List onSuccessHandler={toggleModal} chooseContact={chooseContact}/>
      }
      <ModalForm 
        isOpenModal={isOpen}
        toggleModal={toggleModal} 
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