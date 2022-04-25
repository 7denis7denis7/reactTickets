import {Component} from 'react';
import ModalStyle from './Modal.module.scss';

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() { 
    //Почему я не могу деструктурировать delete? 
    const {deletePerson, 
    closeModal, 
    deleteEmploeeFromData,
    deleted } = this.props;
    return (
      <div className={deleted ? `${ModalStyle.over} ${ModalStyle.overActive}` : ModalStyle.over}> 
        <div className={deleted  ? `${ModalStyle.modal} ${ModalStyle.modalActive}` : ModalStyle.modal}>
          <div>
            Вы уверенны, что хотите удалить пользователя {deletePerson ? deletePerson.name : 'error'} ?
          </div>
          <button onClick={() => deleteEmploeeFromData(deletePerson.id)} name='confirm'>Подтвердить</button>
          <button onClick={closeModal} name='close'>Отменить</button>
        </div>
      </div>
    );
  }
}
 
export default Modal;