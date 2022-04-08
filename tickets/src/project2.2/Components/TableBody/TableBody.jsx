import {Component} from 'react';
import TableBodyStyle from './TableBody.module.scss';

class TableBody extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <tbody>
                <tr>
                    <td className={TableBodyStyle.text}>Имя</td>
                    <td className={TableBodyStyle.text}>Пол</td>
                    <td className={TableBodyStyle.text}>Возраст</td>
                    <td className={TableBodyStyle.text}>На месте</td>
                </tr>
            </tbody>
        );
    }
}
 
export default TableBody;
