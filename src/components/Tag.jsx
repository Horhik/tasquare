import React from 'react'
import {connect} from 'react-redux';
class Tag extends React.Component{
    render() {
        const showLight = this.props.color > 170 && this.props.color < 296;
        return(
            <mark
                className={"tag tag__on-creating"}
                style={{
                color: `${showLight?'white': 'black'}`,
                backgroundColor: `hsl(${this.props.color}, 100%, 50%)`,
                borderColor: `hsl(${this.props.color}, 100%, ${showLight?'70%':'35%'})`,
            }}>{`#${this.props.creator.newTagText}`}</mark>
        )
    }
}
export default connect(state => ({
    creator: state.taskCreator.tagCreator
}))(Tag)
