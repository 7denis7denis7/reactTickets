import {useState} from 'react';
import axios from 'axios';
import WrapperCSS from './Wrapper.module.scss';

import SearchBar from '../SearchBar/SearchBar';
import Dashboard from '../Dashboard/Dashboard';
import Modal from '../Modal/Modal';


function Wrapper() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState(null);
  const [search, setSearch] = useState('');
  const [modalImage, setModalImage] = useState('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');


  let source;

  const toggleModal = () => setModal(!modal);

  const sendRequest = (val, localPage) => {

    const params = val.trim('').replace(/ /ig, '+');

    if(source){
      source.cancel();
    }
    source =  axios.CancelToken.source();

    axios.get(`https://pixabay.com/api/?key=28191304-3f691a8fd6738ad4907375e39&q=${params}&image_type=photo&page=${!localPage ? 1 : localPage}`, 
    {cancelToken: source.token})
      .then(response => {
        if(!localPage){
          setData(response.data.hits)
          setPage(2);
        }else{
        setData(prevState => [...prevState, ...response.data.hits])
          setPage(prev => ++prev);
        }
      })
      .catch(error => {
        alert(error.message);
      });
  }


  const setItemImage = (e) => {
    setModalImage(e.target.src);
    toggleModal();
  }

  return (
    <div className={WrapperCSS.wrapper}>
      <SearchBar action={() => sendRequest(search)} setap={setSearch} value={search}/>
      <Dashboard data={data} action={setItemImage} more={() => sendRequest(search, page)}/>
      <Modal modalImage={modalImage} modal={modal} action={toggleModal} />
    </div>
  );
}

export default Wrapper;