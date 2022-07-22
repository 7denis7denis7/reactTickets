import axios from 'axios';

function postContact (obj) {
  const url = `https://62d05e8dd9bf9f170588865f.mockapi.io/contact`;

  return axios.post(url, {
    firstName: obj.firstName,
    lastName: obj.lastName,
    phone: obj.phone
  })
}


export default postContact;

