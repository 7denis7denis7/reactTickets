import ListStyle from "./List.module.scss";
import Button from "../../../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "../request/getContact";
import { useEffect } from "react";

function List({ onSuccessHandler, chooseContact }) {
  const contacts = useSelector((state) => state.contacts.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

  // Можно ли поступать так при работе с асинхронным кодом? Или все таки лучше использовать thunk,
  // для того чтобы сделать сам action асинхронным?

  // useEffect(() => {
  //   getContact()
  //   .then(function (response) {
  //     dispatch(initialContactAction(response.data))
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }, [dispatch])

  return (
    <>
      {contacts.length ? (
        <div className={ListStyle.list}>
          <div className={ListStyle.list__contacts}>
            {contacts.map((item) => {
              return (
                <div
                  className={ListStyle.list__row}
                  key={item.id}
                  onClick={() => chooseContact(item)}
                >
                  <div>
                    {item.firstName}&nbsp;{item.lastName}
                  </div>
                  <div>{item.phone}</div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className={ListStyle.list__empty}>Contact list is empty</div>
      )}
      <Button text="Add contacts" name="add" action={onSuccessHandler} />
    </>
  );
}

export default List;
