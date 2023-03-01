import ReactDom from 'react-dom';
import ModalStyle from './Modal.module.scss';

import close from '../../../icons/close.svg';

function Modal({children, toggleModal}) {
  return (
    ReactDom.createPortal(
      <div className={ModalStyle.modal}>
        <div className={ModalStyle.modal__wrapper}>
        <img className={ModalStyle.modal__close} src={close} onClick={toggleModal} alt="close"/>
          {children}
        </div>
      </div>,
      document.getElementById('placeForModal')
    )
  )
}

export default Modal;