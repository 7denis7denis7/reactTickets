import request from './requets';


function deleteFromServer (id) {
  const url = `contact/${id}`;

  return request.delete(url, {})
}


export default deleteFromServer;

