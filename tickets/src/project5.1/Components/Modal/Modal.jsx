import ModalCSS from './Modal.module.scss';
import cn from 'classnames';
import close from '../../../icons/close.svg'

function Modal(props) {
  const {action, modalImage} = props;
  return (
    <div className={modalImage ? cn(ModalCSS.modal, ModalCSS.modal__active) : ModalCSS.modal}>
      <div className={ModalCSS.modal__inner}>
        <img className={ModalCSS.modal__close} src={close} onClick={action} alt="close"/>
        <img className={ModalCSS.modal__image} src={modalImage} alt="image"/>
      </div>
    </div>
  );
}

export default Modal;