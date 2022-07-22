import axios from 'axios';


function deleteFromServer (id) {
  const url = `https://62d05e8dd9bf9f170588865f.mockapi.io/contact/${id}`;

  return axios.delete(url, {})
}


export default deleteFromServer;

