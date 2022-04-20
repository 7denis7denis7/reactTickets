import {Component} from 'react';
import SearchBar from './SearchBar/SearchBar'
import TableHead from './TableHead/TableHead'
import TableBody from './TableBody/TableBody'
import TableStyle from './Table.module.scss';

class Table extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    const {findEmployee, data, setId, finded} = this.props;
    return (
      <>
        <SearchBar findEmployee={findEmployee}/>
        <table className={TableStyle.table}>
            <TableHead/>
            <TableBody
            data={data}
            setId={setId}
            finded={finded}
            />
        </table>
      </>
    );
  }
}
 
export default Table;