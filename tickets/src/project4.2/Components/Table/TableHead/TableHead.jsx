import TableHeadStyle from './TableHead.module.scss'

function TableHead() {
  return (
    <thead>
      <tr>
        <td>Name</td>
        <td>Department</td>
        <td>Edit</td>
        <td>Delete</td>
      </tr>
    </thead>
  );
}

export default TableHead;