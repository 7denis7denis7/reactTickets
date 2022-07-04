import ModalCSS from './Modal.module.scss';
import cn from 'classnames';
import close from '../../../icons/close.svg'

function Modal(props) {
  const {modalImage, action} = props;

  const closeModal = () => {
    document.body.classList.remove("no-scroll");
    action(null);
  }

  return (
    <>
      {modalImage ? document.body.classList.add("no-scroll") : null}
      <div className={modalImage ? cn(ModalCSS.modal, ModalCSS.modal__active) : ModalCSS.modal}>
        <div className={ModalCSS.modal__inner}>
          <img className={ModalCSS.modal__close} src={close} onClick={closeModal} alt="close"/>
          <img className={ModalCSS.modal__image} src={modalImage} alt="image"/>
        </div>
      </div>
    </>
    
  );
}

export default Modal;