import {Component} from 'react';
import AllMarkStyle from './AllMark.module.scss';

class AllMark extends Component {
    constructor(props) {
      super(props);
    }
    render() {  
        const {bad,normal,good, total, percent} = this.props;       
        return (
          <div>
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
            <div className={AllMarkStyle.main}>
              <div className={AllMarkStyle.title}>Total reviews: </div>
              <div className={AllMarkStyle.elem}>
                  Total marks: <span>{total}</span>
              </div>
              <div className={AllMarkStyle.elem}>
                  Percent of good marks: <span>{percent}</span>
              </div>
            </div>
          </div>
        );
    }
}
 
export default AllMark;