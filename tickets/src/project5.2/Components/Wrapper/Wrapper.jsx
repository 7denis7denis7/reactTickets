import {useState} from 'react';
import WrapperStyle from './Wrapper.module.scss';

import List from '../List/List';
import ModalForm from '../ModalForm/ModalForm';

const data = [
  {name: 'John', surname: 'Lorem', number: '098123528', id: 1},
  {name: 'Elon', surname: 'Ipsum', number: '096352128', id: 2},
  {name: 'Bill', surname: 'Sit', number: '095281238', id: 3},
  {name: 'Tim', surname: 'Amore', number: '092528123', id: 4}
]

function Wrapper() {
  const [modal, setModal] = useState(false);
  const [contacts, setContacts] = useState(data);

  const toggleModal = () => {
    setModal(!modal);
  }

  return (
    <div className={WrapperStyle.wrapper}>
      <List contacts={contacts} action={toggleModal}/>
      <ModalForm modal={modal}/>
    </div>
  );
}

export default Wrapper;