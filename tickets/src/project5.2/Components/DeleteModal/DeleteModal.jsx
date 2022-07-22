import ReactDom from 'react-dom';
import DeleteModalStyle from './DeleteModal.module.scss';
import cn from 'classnames';

import Button from '../../../Button/Button';
import close from '../../../icons/close.svg';

function DeleteModal({modal, toggleModal, action}) {
  return ReactDom.createPortal(
    <div className={modal ? cn(DeleteModalStyle.modal, DeleteModalStyle.modal__active) : DeleteModalStyle.modal}>
      <div className={DeleteModalStyle.modal__wrapper}>
        <img className={DeleteModalStyle.modal__close} src={close} onClick={toggleModal} alt="close"/>
        <div className={DeleteModalStyle.modal__title}>Are you sure you want to delete a contact?</div>
        <Button text="Yes, delete" name="delete" action={action} className={DeleteModalStyle.modal__button}/>
        <Button text="Cancel" name="cancel" action={toggleModal} className={DeleteModalStyle.modal__button}/>
      </div>
    </div>,
    document.getElementById('deleteContact')
  );
}

export default DeleteModal;