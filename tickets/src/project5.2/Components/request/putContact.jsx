import request from './requets';

function putContact (obj, id) {
  const url = `contact/${id}`;

  return request.put(url, {
      firstName: obj.firstName,
      lastName: obj.lastName,
      phone: obj.phone
    })
}


export default putContact;
