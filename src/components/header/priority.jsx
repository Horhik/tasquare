import React from 'react';
import {connect} from 'react-redux'
import {changeFilterPriority} from "../../actions/userActions";
import {priorities} from "../../constants/priorities";
const {IU, IN, NU, NN} = priorities

class Priority extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            priority: '',
            class: 'priority--selected',
        };
        this.changeFilter = this.changeFilter.bind(this)
    }

    componentDidMount() {
        const _priority = () => {
        switch (this.props.label) {

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
        }
    };
        const priority = _priority()
        this.setState({priority : priority})
        console.log(priority)
        console.log(this.state.priority)
    }
    changeFilter(){
        this.props.changeFilterPriority(this.state.priority);
        this.setState({setClass: true})
    }
    render() {
        const mainColor = getComputedStyle(document.documentElement)
            .getPropertyValue('--main-color');
        return (
            <a
                style={{
                    backgroundColor: this.state.priority === this.props.currentFilter? `hsl(${mainColor}, 88%, 30%)`: ''
                }}
                onClick={ this.changeFilter}
                href={`#priority ${this.props.label}`}
                className={`priority`}>{this.props.label}</a>
        );
    }
}
export default connect(state => ({
    currentFilter: state.userData.currentTaskFilter
}), {
    changeFilterPriority
})(Priority)