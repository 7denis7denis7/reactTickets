import {Routes, Route} from 'react-router-dom';

import MainPage from '../MainPage/MainPage'
import Details from '../Details/Details'
import Cast from '../Cast/Cast'
import Reviews from '../Reviews/Reviews'

import WrapperStyle from './Wrapper.module.scss';




function Wrapper() {
  return (
    <div className={WrapperStyle.wrapper}>
      <Routes>
        <Route path="/" index element={<MainPage />} />
        <Route path="movies/:id" element={<Details />} >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" index element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default Wrapper;