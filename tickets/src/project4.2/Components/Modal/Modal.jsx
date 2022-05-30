import ModalStyle from './Modal.module.scss'
import Button from '../Button/Button'

function Modal (props) {
  const {
    closeModal,
    personToDelete,
    deleteEmploeeFromData,
  } = props;


  return (
    <div className={personToDelete ? `${ModalStyle.modal} ${ModalStyle.modal__active}` : ModalStyle.modal}>
      <div className={ModalStyle.modal__inner}>
        <div className={ModalStyle.modal__title}>
          Вы уверенны, что хотите удалить пользователя {personToDelete ? personToDelete.name : 'error'} ?
        </div>
        <div className={ModalStyle.modal__btns}>
          <Button 
            text='Подтвердить'
            action={() => deleteEmploeeFromData(personToDelete.id)}
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