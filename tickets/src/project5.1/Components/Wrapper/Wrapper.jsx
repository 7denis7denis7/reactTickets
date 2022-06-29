import {useState, useEffect} from 'react';
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


  const closeModal = () => {
    document.body.classList.remove("no-scroll");
    setModalImage(null);
  }

  const sendRequest = (val='', localPage=1) => {
    const params = val.trim('').replace(/ /ig, '+');
    const url = `https://pixabay.com/api/?key=28191304-3f691a8fd6738ad4907375e39&q=${params}&image_type=photo&page=${localPage}`;
    getImages(url, localPage, setData, setPage);
  }

  useEffect(()=>{
    sendRequest(search);
  }, [search]);

  useEffect(()=>{
    if(page !== 1) sendRequest(search, page);
  }, [page]);



  const setItemImage = (e) => {
    setModalImage(e.target.src);
    document.body.classList.add("no-scroll");
  }

  return (
    <div className={WrapperCSS.wrapper}>
      <SearchBar setup={setSearch} value={search}/>
      <Dashboard data={data} action={setItemImage} more={() => setPage(prev => prev + 1)}/>
      {modalImage &&
        <Modal modalImage={modalImage} action={closeModal} />
      }
    </div>
  );
}

export default Wrapper;