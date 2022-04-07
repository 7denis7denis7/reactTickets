import {Component} from 'react';
import TotalStyle from './Total.module.scss';


class Total extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        const {total, percent} = this.props;
        return ( 
            <div className={TotalStyle.main}>
                <div className={TotalStyle.title}>Total reviews: </div>
                <div className={TotalStyle.elem}>
                    Total marks: <span>{total}</span>
                </div>
                <div className={TotalStyle.elem}>
                    Percent of good marks: <span>{percent}</span>
                </div>
            </div>
        );
    }
}
 
export default Total;