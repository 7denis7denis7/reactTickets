import React, {Component} from 'react';
import WrapperStyle from './Wrapper.module.scss'

import Rating from '../Rating/Rating'
import AllMark from '../AllMark/AllMark'

class Wrapper extends Component {
    constructor(props){
        super(props);

        this.state ={
            bad: 0,
            normal: 0,
            good: 0
        }
    }

    setMark = (e, star) => {
        if(star <= 0 && star > 5){
            return false;
        }else{
            if(star <= 2){
                this.setState(({ bad }) => ({ bad: bad + 1 }));
            }else if(star === 3){
                this.setState(({normal}) => ({normal: normal + 1}));
            }else{
                this.setState(({good}) => ({good: good + 1}));
            }   
        }
    }


    render() { 
        const {bad, normal, good} = this.state;
        const total = bad + normal + good;
        return (
            <div className={WrapperStyle.main}> 
                <Rating 
                    setMark={this.setMark}
                />
                <AllMark
                    bad={bad}
                    normal={normal}
                    good={good}
                />
            </div>
        );
    }
}


export default Wrapper;


