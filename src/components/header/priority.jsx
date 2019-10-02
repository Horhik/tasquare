import React from 'react';

class Priority extends  React.Component {
    render() {
        return (
            <a href="#priority1" className="priority">{this.props.label}</a>
        );
    }
}
export default Priority