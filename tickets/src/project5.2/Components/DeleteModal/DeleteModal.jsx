import ReactDom from 'react-dom';
import DeleteModalStyle from './DeleteModal.module.scss';

import deleteFromServer from '../request/delete'

import Button from '../../../Button/Button';
import close from '../../../icons/close.svg';

function DeleteModal({modal, toggleModal, current, initialValues, onDeleteSuccess}) {


  const deleteContact = (id) => {
    deleteFromServer(id)
    .then(function (response) {
      onDeleteSuccess(tempContacts);
    })
    .catch(function (error) {
      console.log(error);
    });

    const tempContacts = initialValues.filter(item => {
      if(item.id !== id){
        return item;
      }
    });
  } 



  return (
    modal ?
    <div className={DeleteModalStyle.modal__wrapper}>
      <img className={DeleteModalStyle.modal__close} src={close} onClick={toggleModal} alt="close"/>
      <div className={DeleteModalStyle.modal__title}>Are you sure you want to delete a contact?</div>
      <Button text="Yes, delete" name="delete" action={() => deleteContact(current.id)} className={DeleteModalStyle.modal__button}/>
      <Button text="Cancel" name="cancel" action={toggleModal} className={DeleteModalStyle.modal__button}/>
    </div>
    :
    null
  )
}

export default DeleteModal;