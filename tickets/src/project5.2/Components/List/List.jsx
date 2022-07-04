import ListStyle from './List.module.scss';
import cn from 'classnames';

import Button from '../../../Button/Button';

function List(props) {
  const {contacts, action} = props;

  return (
    <div className={ListStyle.list}>
      <h2>List of contacts</h2>
      <div className={ListStyle.list__contacts}>
        {
          contacts.map(item => {
            return(
              <div className={ListStyle.list__row} key={item.id}>
                <div>{item.name}&nbsp;{item.surname}</div>
                <div>{item.number}</div>
              </div>
            )
          })
        }
      </div>
      <Button 
        text="Add contacts" 
        name="add"
        action={action}
      />
    </div>
  );
}

export default List;