import ReactDom from 'react-dom';
import DeleteModalStyle from './DeleteModal.module.scss';

import deleteFromServer from '../request/delete'

import Button from '../../../Button/Button';
import Modal from '../Modal/Modal';


function DeleteModal({isOpenModal, toggleModal, currentContact, deleteCurrentContact}) {

  const deleteContact = (id) => {

    deleteFromServer(id)
    .then(function (response) {
      deleteCurrentContact(id);
    })
    .catch(function (error) {
      console.log(error);
    });
  } 



  return (
    isOpenModal ? 
      <Modal toggleModal={toggleModal}>
        <div className={DeleteModalStyle.modal__title}>Are you sure you want to delete a contact?</div>
        <Button text="Yes, delete" name="delete" action={() => deleteContact(currentContact.id)} className={DeleteModalStyle.modal__button}/>
        <Button text="Cancel" name="cancel" action={toggleModal} className={DeleteModalStyle.modal__button}/>
      </Modal>
    : 
    null
  )
}

export default DeleteModal;