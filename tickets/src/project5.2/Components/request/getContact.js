import request from './requets';

function getContact () {
  const url = 'contact';

  return request.get(url)
}

export default getContact;

