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
              Отдел 
            </td>
            <td className={TableHeadStyle.title}>
              Редактировать 
            </td>
            <td className={TableHeadStyle.title}>
              Удалить 
            </td>
          </tr>
        </thead>
    );
  }
}
 
export default Table;