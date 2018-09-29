import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shown: false
        };
    }

    render() {
        const content = this.state.shown ? this.props.value : '';
	return <span className="cell" onClick={() => this.handleClick()}>&nbsp;{content}&nbsp;</span>;
    }

    handleClick() {
        this.setState({
            shown: true
        });
    }
    
}

export default Cell;
