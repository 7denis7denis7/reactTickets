import {Component} from 'react';
import TableHead from '../TableHead/TableHead'
import TableBody from '../TableBody/TableBody'

import WrapperStyle from './Wrapper.module.scss';

class Wrapper extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return (
      <div className={WrapperStyle.container}>
        <table className={WrapperStyle.table}>
          <TableHead />
          <TableBody />
        </table>
      </div>
    );
  }
}
 
export default Wrapper;