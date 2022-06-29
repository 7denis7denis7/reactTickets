import axios from 'axios';

let source;

function getImages (url, localPage, setData, setPage) {
  if(source){
    source.cancel();
  }
  source = axios.CancelToken.source();
  axios.get(url, 
  {cancelToken: source.token})
    .then(response => {
      if(localPage === 1){
        setData(response.data.hits)
      }else{
        setData(prevState => [...prevState, ...response.data.hits])
      }
    })
    .catch(error => {
      console.log(error.message);
    });
}


export default getImages;

