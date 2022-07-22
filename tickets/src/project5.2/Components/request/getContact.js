import axios from 'axios';

function getContact () {
  const url = `https://62d05e8dd9bf9f170588865f.mockapi.io/contact`;

  return axios.get(url)
}


export default getContact;

