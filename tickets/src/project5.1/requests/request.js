import axios from 'axios';

let source;

function getImages (url) {
  if(source){
    source.cancel();
  }
  source = axios.CancelToken.source();
  return axios.get(url, 
  {cancelToken: source.token})
}


export default getImages;

