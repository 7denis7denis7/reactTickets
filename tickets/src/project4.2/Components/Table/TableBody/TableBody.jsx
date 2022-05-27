import TableBodyStyle from './TableBody.module.scss'
import Button from '../../../Components/Button/Button'

function TableBody(props) {
  const {dataBase, setId, findId} = props;
  const currentData = [...dataBase];

  return (
    <tbody>
      {
        currentData.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
        .map(item => {
        const {name, department, id} = item;
        return(
          <tr key={id} className={findId.includes(id) ? TableBodyStyle.active : ''}>
            <td>{name}</td>
            <td>{department}</td>
            <td>
              <Button 
                text='Edit'
                name='editable'
                action={(e) => setId(e.target.name, id)}
              />
            </td>
            <td>
              <Button 
                text='Delete'
                name='deleted'
                action={(e) => setId(e.target.name, id)}
              />
            </td>
          </tr>
        )
      })
      }
     
    </tbody>
  );
}

export default TableBody;