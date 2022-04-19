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
    deleteEmploeeFromData } = this.props;
    return (
      <div className={this.props.delete ? `${ModalStyle.over} ${ModalStyle.overActive}` : ModalStyle.over}> 
        <div className={this.props.delete  ? `${ModalStyle.modal} ${ModalStyle.modalActive}` : ModalStyle.modal}>
          <div>
            Вы уверенны, что хотите удалить пользователя {deletePerson ? deletePerson.name : 'error'} ?
          </div>
          <button onClick={(e) => deleteEmploeeFromData(e, deletePerson.id)} name='confirm'>Подтвердить</button>
          <button onClick={closeModal} name='close'>Отменить</button>
        </div>
      </div>
    );
  }
}
 
export default Modal;