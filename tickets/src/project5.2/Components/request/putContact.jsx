import axios from 'axios';


function putContact (obj, id) {
  const url = `https://62d05e8dd9bf9f170588865f.mockapi.io/contact/${id}`;

  return axios.put(url, {
    firstName: obj.firstName,
    lastName: obj.lastName,
    phone: obj.phone
  })
}


export default putContact;
