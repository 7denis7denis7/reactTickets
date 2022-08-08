import ReactDom from 'react-dom';
import DeleteModalStyle from './DeleteModal.module.scss';

import deleteFromServer from '../request/delete'

import Button from '../../../Button/Button';
import Modal from '../Modal/Modal';


function DeleteModal({modal, toggleModal, current, initialValues, onDeleteSuccess}) {


  const deleteContact = (id) => {
    deleteFromServer(id)
    .then(function (response) {
      const tempContacts = initialValues.filter(item => {
        if(item.id !== id){
          return item;
        }
      });
      onDeleteSuccess(tempContacts);
    })
    .catch(function (error) {
      console.log(error);
    });
  } 



  return (
    modal ? 
      <Modal toggleModal={toggleModal}>
        <div className={DeleteModalStyle.modal__title}>Are you sure you want to delete a contact?</div>
        <Button text="Yes, delete" name="delete" action={() => deleteContact(current.id)} className={DeleteModalStyle.modal__button}/>
        <Button text="Cancel" name="cancel" action={toggleModal} className={DeleteModalStyle.modal__button}/>
      </Modal>
    : 
    null
  )
}

export default DeleteModal;