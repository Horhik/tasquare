import React from 'react';
import Priority from "./priority";
import {connect} from 'react-redux'

import {priorities} from "../../constants/priorities";
const {IU, IN, NU, NN} = priorities

class DayDate extends React.Component {
    constructor(props){
        super(props)
        this.filter =['iU', 'iN', 'nU', 'nN']
        this.state={
            filter: this.filter,
            boolFilter: [],
            mapFilter: this.filter.map(i =>{
            switch (i) {
                case 'iU':
                    return IU
                case 'iN':
                    return IN
                case 'nU':
                    return NU
                case 'nN':
                    return NN
                default :
                    return IU
                }}
            ),
        }
    }
    componentDidUpdate(){
    }

    render() {
        return(
            <header className={'header'}>
                <h1 className={'h1 header__h1'}>Today</h1>
                <nav className={'priority--wrapper'}>
                    <ul className={'priority--inner'}>
                        <li>
                            <Priority selected={this.state.boolFilter[0]} label={this.state.filter[0]}/>
                        </li>
                        <li>
                            <Priority selected={this.state.boolFilter[1]} label={this.state.filter[1]}/>
                        </li>
                        <li>
                            <Priority selected={this.state.boolFilter[2]} label={this.state.filter[2]}/>
                        </li>
                        <li>
                            <Priority selected={this.state.boolFilter[3]} label={this.state.filter[3]}/>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default connect(state => ({
    currentTaskFilter: state.userData.currentTaskFilter
}))(DayDate)