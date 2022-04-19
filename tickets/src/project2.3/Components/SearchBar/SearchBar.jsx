import {Component} from 'react';
import SearchBarStyle from './SearchBar.module.scss'


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: null
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() { 
        const {search} = this.state;
        const {findEmployee} = this.props;
        return (
            <input 
            placeholder='Поиск сотрудника' 
            name='search' value={search || ''}  
            onChange={e => {this.handleInput(e); findEmployee(e)}}
            className={SearchBarStyle.input} 
            type="text"/>
        );
    }
}
 
export default SearchBar;