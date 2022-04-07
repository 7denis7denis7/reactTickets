import {Component} from 'react';
import AllMarkStyle from './AllMark.module.scss';

class AllMark extends Component {
    constructor(props) {
        super(props);
    }
    render() {  
        const {bad,normal,good} = this.props;       
        return (
            <div className={AllMarkStyle.main}>
                <div className={AllMarkStyle.title}>Reviews:</div>
                <div className={AllMarkStyle.punct}>
                    Total bad marks: <span>{bad}</span>
                </div>
                <div className={AllMarkStyle.punct}>
                    Total normal marks: <span>{normal}</span>
                </div>
                <div className={AllMarkStyle.punct}>
                    Total good marks: <span>{good}</span>
                </div>
            </div>
        );
    }
}
 
export default AllMark;