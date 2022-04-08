import {Component} from 'react';
import TableHeadStyle from './TableHead.module.scss';

class Table extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return (
      <thead>
          <tr>
            <td className={TableHeadStyle.title}>
              Имя 
            </td>
            <td className={TableHeadStyle.title}>
              Пол 
            </td>
            <td className={TableHeadStyle.title}>
              Возраст 
            </td>
            <td className={TableHeadStyle.title}>
              На месте
            </td>
          </tr>
        </thead>
    );
  }
}
 
export default Table;