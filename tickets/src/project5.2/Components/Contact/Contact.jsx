import ContactStyle from './Contact.module.scss';
import Button from '../../../Button/Button';

function Contact({contact, onSuccessHandler, toggleModal, goBack}) {

  return contact !== null ? (
    <>
      <Button 
        text="Go back" 
        className={ContactStyle.contact__back}
        name="back"
        action={goBack}
      />
      <div className={ContactStyle.contact}>
        <div className={ContactStyle.contact__inner}>
          <div className={ContactStyle.contact__info}>
            {contact.firstName}
          </div>
          <div className={ContactStyle.contact__info}>
            {contact.lastName}
          </div>
          <div className={ContactStyle.contact__info}>
            {contact.phone}
          </div>
          <div className={ContactStyle.contact__wrapper}>
            <Button 
            text="Edit"
            name="edit"
            action={onSuccessHandler}
            />
            <Button 
            text="Delete"
            name="edit"
            action={toggleModal}
            />
          </div>
        </div>
      </div>
    </>
  )
  : null;
}

export default Contact;