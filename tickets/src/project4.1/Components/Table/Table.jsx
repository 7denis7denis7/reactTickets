import TableStyle from './Table.module.scss'

function Table(props) {
  const {list, isVisit} = props;
  const currentData = [...list];
  return (
    <table>
      <thead>
          <tr>
              <td>Имя</td>
              <td>Пол</td>
              <td>Возраст</td>
              <td>На месте</td>
          </tr>
      </thead>
      <tbody>
        {
          currentData.sort((a,b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)
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
                <td>{name}</td>
                <td>{gender}</td>
                <td>{age}</td>
                <td>
                  <input onChange={()=>isVisit(id)} type="checkbox" checked={visit}/>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
}

export default Table;