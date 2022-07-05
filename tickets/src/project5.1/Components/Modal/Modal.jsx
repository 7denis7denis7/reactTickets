import {useEffect} from 'react';
import ModalCSS from './Modal.module.scss';
import cn from 'classnames';
import close from '../../../icons/close.svg'

function Modal(props) {
  const {modalImage, action} = props;

  useEffect(()=>{
    if(modalImage !== null){
      document.body.classList.add("no-scroll");
    }
    
    return () => {
      document.body.classList.remove("no-scroll");
    }
  }, [modalImage]);

  return modalImage !== null ? (
    <>
      <div className={cn(ModalCSS.modal, {[ModalCSS.modal__active] : modalImage !== null})}>
        <div className={ModalCSS.modal__inner}>
          <img className={ModalCSS.modal__close} src={close} onClick={action} alt="close"/>
          <img className={ModalCSS.modal__image} src={modalImage} alt="image"/>
        </div>
      </div>
    </> 
  ) 
  : null; 

}

export default Modal;