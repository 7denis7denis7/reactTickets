import {useEffect, useState} from 'react';
import SearchBarCSS from './SearchBar.module.scss';

import Input from '../../../Input/Input';

function SearchBar(props) {

  const {setup, value} = props;

  const [input, setInput] = useState(value);


  useEffect(() => {
    let timeout;
    timeout = setTimeout(() => setup(input), 500);
    return function() {
      clearTimeout(timeout);
    }
  }, [input]);


  return (
    <form className={SearchBarCSS.form}>
      <Input 
        type='text'
        placeholder='Search images'
        action={setInput}
        value={input}
      />
    </form>
  );
}

export default SearchBar;