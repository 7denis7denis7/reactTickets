import {useEffect} from 'react';
import SearchBarCSS from './SearchBar.module.scss';

import Input from '../../../Input/Input';

function SearchBar(props) {

  const {action, setap, value} = props;


  useEffect(() => {
    let timeout;
    timeout = setTimeout(action, 500);
    return function() {
      clearTimeout(timeout);
    }
  }, [value]);


  return (
    <form className={SearchBarCSS.form}>
      <Input 
        type='text'
        placeholder='Search images'
        action={e => setap(e)}
        value={value}
      />
    </form>
  );
}

export default SearchBar;