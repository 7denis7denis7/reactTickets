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
      
      let tmpFinded = this.props.data.filter(item => {
        if(item.name.toLocaleLowerCase().search(val) !== -1){
          return item
        }
      }).map(item => item.id);

      this.setState({
        findId: [...tmpFinded]
      })
    }else{
      this.setState({findId: []})
    }
  }

  render() { 
    const {data, setId} = this.props;
    const {findId} = this.state
    return (
      <>
        <SearchBar findPerson={this.findPerson}/>
        <table className={TableStyle.table}>
            <TableHead/>
            <TableBody
            data={data}
            setId={setId}
            findId={findId}
            />
        </table>
      </>
    );
  }
}
 
export default Table;