import {useState} from 'react';
import TableStyle from './Table.module.scss';

import Input from '../../../Input/Input'

import TableHead from './TableHead/TableHead';
import TableBody from './TableBody/TableBody';

function Table(props) {
  const {dataBase, setId} = props;

  const [findId, setFindId] = useState([]);
  const [searchValue, setSearchValue] = useState(null);


  const findPerson = (val) => {
    setSearchValue(val)
    if(val.length > 0){


      let tmpFinded = dataBase.filter(item => {
        if(item.name.toLocaleLowerCase().includes(val)){
          return item
        }
      }).map(item => item.id);  

      setFindId([...tmpFinded])
    }else{
      setFindId([])
    }
  }

  return (
    <div>
      <Input
        type={'text'}
        placeholder={'Search'}
        action={findPerson}
        value={searchValue}
      />
      <table>
        <TableHead/>
        <TableBody 
          dataBase={dataBase}
          setId={setId}
          findId={findId}
        />
      </table>
    </div>
  );
}

export default Table;