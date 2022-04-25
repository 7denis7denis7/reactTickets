import {Component} from 'react';
import SearchBar from './SearchBar/SearchBar'
import TableHead from './TableHead/TableHead'
import TableBody from './TableBody/TableBody'
import TableStyle from './Table.module.scss';

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      findId: []
    }

  }

  findPerson = (val) => {
    if(val.length > 0){
      const tmpFinded = [];                             
      const tmpData = this.props.data.map(item => {
        if(item.name.toLocaleLowerCase().search(val) !== -1){
          tmpFinded.push(item.id)
        }
        return item;
      });
      this.setState({
        findId: [...tmpFinded]
      })
    }else{
      this.setState({findId: []})
    }
  }

  render() { 
    const {findEmployee, data, setId, finded} = this.props;
    const {findId} = this.state

    return (
      <>
        <SearchBar findPerson={this.findPerson}/>
        <table className={TableStyle.table}>
            <TableHead/>
            <TableBody
            data={data}
            setId={setId}
            finded={findId}
            />
        </table>
      </>
    );
  }
}
 
export default Table;