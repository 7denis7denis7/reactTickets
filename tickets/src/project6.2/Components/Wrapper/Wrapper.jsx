import {Routes, Route} from 'react-router-dom';

import WrapperStyle from './Wrapper.module.scss';

import MainPage from '../MainPage/MainPage'


function Wrapper() {
  return (
    <div className={WrapperStyle.wrapper}>
      <Routes>
        <Route path="*" index element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default Wrapper;