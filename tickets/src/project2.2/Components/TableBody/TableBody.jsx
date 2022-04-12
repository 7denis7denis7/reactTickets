import {Component} from 'react';
import TableBodyStyle from './TableBody.module.scss';

class TableBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {  
    const {data} = this.props;
    return (
      <tbody className={TableBodyStyle.test}>
        {
          data.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)
          .sort((a,b) => a.visit > b.visit ? 1 : -1)
          .map(item=> {
            const {
              name, 
              gender,
              age,
              visit,
              id
            } = item;
            return(
              <tr key={id}>
                <td className={TableBodyStyle.text}>{name}</td>
                <td className={TableBodyStyle.text}>{gender}</td>
                <td className={TableBodyStyle.text}>{age}</td>
                <td className={TableBodyStyle.text}>
                  <input onChange={() => this.props.isVisit(id)} type="checkbox" checked={visit} />
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


