import ReactDom from 'react-dom';
import ModalFormStye from './ModalForm.module.scss';
import cn from 'classnames';

import Button from '../../../Button/Button';

import close from '../../../icons/close.svg';

function ModalForm(props) {
  const {modal} = props;
  return ReactDom.createPortal(
    <div className={modal ? cn(ModalFormStye.modal, ModalFormStye.modal__active) : ModalFormStye.modal}>
      <div className={ModalFormStye.modal__wrapper}>
        <img className={ModalFormStye.modal__close} src={close} alt="close"/>
        <form>
          <label htmlFor="name">Name</label>
          <input id="name" type="text"/>
          <label htmlFor="surname">Surname</label>
          <input id="surname" type="text"/>
          <label htmlFor="number">Number</label>
          <input id="number" type="text"/>
          <Button text="Save" name="submit" className={ModalFormStye.modal__btn}/>
        </form>
      </div>
    </div>,
    document.getElementById('portal')
  );
}

export default ModalForm;