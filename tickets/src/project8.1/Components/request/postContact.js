import request from './requets';

function postContact (obj) {
  const url = 'contact'

  return request.post(url, {
    firstName: obj.firstName,
    lastName: obj.lastName,
    phone: obj.phone
  })

}


export default postContact;

