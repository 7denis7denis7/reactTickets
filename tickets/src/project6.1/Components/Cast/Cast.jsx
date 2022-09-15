import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import getCast from '../requests/getCast';
import EmptyPlaceholder from '../EmptyPlaceholder/EmptyPlaceholder'

import CastStyle from './Cast.module.scss';

function Cast() {
  const [infoCast, setInfoCast] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    getCast(id)
    .then(data => setInfoCast(data))
    .catch(error => console.log(error))
  }, [])
  
  return (
    <div className={CastStyle.cast__content}>
      {
        infoCast.length ? 
          infoCast.map(item => {
            const {id, character, original_name} = item;
            return(
              <div className={CastStyle.cast__row} key={id}>
                <div className={CastStyle.cast__character}>{character}</div>
                <div className={CastStyle.cast__name}>{original_name}</div>
              </div>
            )
          })
        :
          <EmptyPlaceholder 
            text='This movie has no actors'
          />
      }
    </div>
  );
}

export default Cast;