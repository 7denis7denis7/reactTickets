import React, {Component} from 'react';
import WrapperStyle from './Wrapper.module.scss'

import Rating from '../Rating/Rating'
import AllMark from '../AllMark/AllMark'
import Total from '../Total/Total'


class Wrapper extends Component {
    constructor(props){
        super(props);

        this.state ={
            bad: 0,
            normal: 0,
            good: 0,
            total: 0
        }
    }

    incrementTotal = () => {
        this.setState({
            total: this.state.total+1
        })
    }

    setMark = (e) => {
        if(e.target){
            const currenRate = e.target.attributes[0].value;
            if(currenRate <= 0 && currenRate > 5){
                return false;
            }else{
                this.incrementTotal();
                if(currenRate <= 2){
                    this.setState({
                        bad: this.state.bad+1,
                        total: this.state.total+1,
                    })
                }else if(currenRate == 3){
                    this.setState({
                        normal: this.state.normal+1,
                        total: this.state.total+1,
                    })
                }else{
                    this.setState({
                        good: this.state.good+1,
                        total: this.state.total+1,
                    })
                }   
            }
        }
    }


    render() { 
        const {bad, normal, total, good} = this.state;
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
                <Total 
                    total={total}    
                    percent={total === 0 ? 0 : (good / total * 100).toFixed(2)}
                />
            </div>
        );
    }
}


export default Wrapper;


