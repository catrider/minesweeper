import React, { Component } from 'react';

class Cell extends Component {

    render() {
	return <span>&nbsp;{this.props.value}&nbsp;</span>;
    }
    
}

export default Cell;
