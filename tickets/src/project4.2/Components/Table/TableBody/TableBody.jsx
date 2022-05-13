import TableBodyStyle from './TableBody.module.scss'

function TableBody(props) {
  const {dataBase} = props;
  const test = dataBase;

  return (
    <tbody>
      {test.map(item => {
        const {name, department, id, visit} = item;
        return(
          <tr key={id}>
            <td>{name}</td>
            <td>{department}</td>
            <td>{visit}</td>
          </tr>
        )
      })}
    </tbody>
  );
}

export default TableBody;