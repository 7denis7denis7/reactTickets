import {Component} from 'react';
import TableBodyStyle from './TableBody.module.scss';

class TableBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {  
    const currentData = [...this.props.data]
    const {setId} = this.props
    return (
      <tbody className={TableBodyStyle.test}>
        {
          currentData.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
          .map(item=> {
            const {
              name, 
              department,
              find,
              id
            } = item;
            return(
              <tr key={id} className={find ? TableBodyStyle.active : ''}>
                <td className={TableBodyStyle.text}>{name}</td>
                <td className={TableBodyStyle.text}>{department}</td>
                <td className={TableBodyStyle.text}>
                  <button onClick={(e) => setId(e,id)} name='editable'>Редактировать</button>
                </td>
                <td className={TableBodyStyle.text}>
                  <button onClick={(e) => setId(e,id)} name='deleted'>Удалить</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
      );
    }
}
 
export default TableBody;


