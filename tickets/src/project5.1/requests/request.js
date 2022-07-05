import axios from 'axios';

let source;

function getImages (val, localPage) {
  if(source){
    source.cancel();
  }
  source = axios.CancelToken.source();
  const params = val.trim('').replace(/ /ig, '+');
  const url = `https://pixabay.com/api/?key=28191304-3f691a8fd6738ad4907375e39&q=${params}&image_type=photo&page=${localPage}`;
  return axios.get(url, 
  {cancelToken: source.token})
}


export default getImages;

