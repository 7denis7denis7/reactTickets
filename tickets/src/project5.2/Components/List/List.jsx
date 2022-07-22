import ListStyle from './List.module.scss';

import Button from '../../../Button/Button';

function List({contacts, action, chooseContact}) {
  return (
    <div className={ListStyle.list}>
      <div className={ListStyle.list__contacts}>
        {
          contacts.map(item => {
            return(                                         
              <div className={ListStyle.list__row} key={item.id} onClick={() => chooseContact(item)}> 
                <div>{item.firstName}&nbsp;{item.lastName}</div>
                <div>{item.phone}</div>
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