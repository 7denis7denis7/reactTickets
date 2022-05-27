import ModalStyle from './Modal.module.scss'
import Button from '../Button/Button'

function Modal (props) {
  const {
    closeModal,
    deletePerson,
    deleteEmploeeFromData,
  } = props;


  return (
    <div className={deletePerson ? `${ModalStyle.modal} ${ModalStyle.modal__active}` : ModalStyle.modal}>
      <div className={ModalStyle.modal__inner}>
        <div className={ModalStyle.modal__title}>
          Вы уверенны, что хотите удалить пользователя {deletePerson ? deletePerson.name : 'error'} ?
        </div>
        <div className={ModalStyle.modal__btns}>
          <Button 
            text='Подтвердить'
            action={() => deleteEmploeeFromData(deletePerson.id)}
          />
          <Button 
            text='Отменить'
            action={closeModal}
          />
        </div>
      
      </div>
    </div>
  );
}

export default Modal;