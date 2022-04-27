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
        const {findPerson} = this.props;
        const {name, value} = e.target;
        this.setState({
            [name] : value
        })
        findPerson(value.trim('').toLocaleLowerCase())
    }

    render() { 
        const {search} = this.state;
        return (
            <input 
            placeholder='Поиск сотрудника' 
            name='search' value={search || ''}  
            onChange={this.handleInput}
            className={SearchBarStyle.input} 
            type="text"/>
        );
    }
}
 
export default SearchBar;