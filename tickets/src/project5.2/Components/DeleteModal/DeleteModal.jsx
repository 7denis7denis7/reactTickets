import ReactDom from 'react-dom';
import DeleteModalStyle from './DeleteModal.module.scss';
import cn from 'classnames';

import deleteFromServer from '../request/delete'

import Button from '../../../Button/Button';
import close from '../../../icons/close.svg';

function DeleteModal({modal, toggleModal, current, initialValues, setInitialValues, setCurrentContact}) {


  const deleteContact = (id) => {
    const tempContacts = initialValues.filter(item => {
      if(item.id !== id){
        return item;
      }
    });

    deleteFromServer(id)
    .then(function (response) {
      setCurrentContact(null);
      toggleModal();
      setInitialValues(tempContacts);
    })
    .catch(function (error) {
      console.log(error);
    });
  } 



  return ReactDom.createPortal(
    <div className={modal ? cn(DeleteModalStyle.modal, DeleteModalStyle.modal__active) : DeleteModalStyle.modal}>
      <div className={DeleteModalStyle.modal__wrapper}>
        <img className={DeleteModalStyle.modal__close} src={close} onClick={toggleModal} alt="close"/>
        <div className={DeleteModalStyle.modal__title}>Are you sure you want to delete a contact?</div>
        <Button text="Yes, delete" name="delete" action={() => deleteContact(current.id)} className={DeleteModalStyle.modal__button}/>
        <Button text="Cancel" name="cancel" action={toggleModal} className={DeleteModalStyle.modal__button}/>
      </div>
    </div>,
    document.getElementById('deleteContact')
  );
}

export default DeleteModal;