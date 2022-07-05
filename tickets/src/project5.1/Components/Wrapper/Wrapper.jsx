import {useState, useEffect, useCallback} from 'react';
import WrapperCSS from './Wrapper.module.scss';

import SearchBar from '../SearchBar/SearchBar';
import Dashboard from '../Dashboard/Dashboard';
import Modal from '../Modal/Modal';

import getImages from '../../requests/request';

function Wrapper() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [modalImage, setModalImage] = useState(null);


  const sendRequest = (val='', localPage=1) => {
    getImages(val, localPage)
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


  const closeModal = useCallback(() => {
    setModalImage(null);
  }, []);



  useEffect(()=>{
    sendRequest(search);
  }, [search]);

  useEffect(()=>{
    if(page !== 1) sendRequest(search, page);
  }, [page]);

  const setItemImage = (e) => {
    setModalImage(e.target.src);
  }

  return (
    <div className={WrapperCSS.wrapper}>
      <SearchBar setup={setSearch} value={search}/>
      <Dashboard data={data} action={setItemImage} more={() => setPage(prev => prev + 1)}/>
      <Modal modalImage={modalImage} action={closeModal}/>
    </div>
  );
}

export default Wrapper;