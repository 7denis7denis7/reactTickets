import request from './requets';
import { initialContactAction } from '../../store/contactReducer';

const url = 'contact';

export const fetchContacts = () => {
  return function(dispatch) {
    request.get(url)
    .then(responce => dispatch(initialContactAction(responce.data)))
  }
}
