import TableStyle from './Table.module.scss';

import Input from '../../../Input/Input'

import TableHead from './TableHead/TableHead';
import TableBody from './TableBody/TableBody';

function Table(props) {
  const {dataBase} = props;

  const action = () => {
    console.log('asd');
  }

  return (
    <div>
      <Input
      type={'text'}
      placeholder={'Search'}
      action={action}
      />
      <table>
        <TableHead/>
        <TableBody 
        dataBase={dataBase}
        />
      </table>
    </div>
  );
}

export default Table;