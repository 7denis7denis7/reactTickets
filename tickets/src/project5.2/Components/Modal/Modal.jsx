import ReactDom from 'react-dom';
import ModalStyle from './Modal.module.scss';

function Modal(props) {
  const {isOpen, modal} = props;
  return (
    isOpen || modal ?
    ReactDom.createPortal(
      <div className={ModalStyle.modal}>
        {props.children}
      </div>,
      document.getElementById('placeForModal')
    )
    :
    null
  )
}

export default Modal;