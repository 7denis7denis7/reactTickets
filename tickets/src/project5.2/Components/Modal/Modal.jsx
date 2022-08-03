import ReactDom from 'react-dom';
import ModalStyle from './Modal.module.scss';

function Modal({children}) {
  return (
    ReactDom.createPortal(
      <div className={ModalStyle.modal}>
        {children}
      </div>,
      document.getElementById('placeForModal')
    )
  )
}

export default Modal;