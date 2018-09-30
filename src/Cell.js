import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shown: false,
	    surroundingMineCount: 0,
        };
    }

    render() {
	const contentToUnveil = this.props.value === 'MINE' ? 'M' : this.state.surroundingMineCount; 
        const content = this.state.shown ? contentToUnveil : '';
	return <span className="cell" onClick={() => this.handleClick()}>&nbsp;{content}&nbsp;</span>;
    }

    handleClick() {
        this.setState({
            shown: true,
	    surroundingMineCount: this.props.surroundingMineCountFn(),
        });
    }
    
}

export default Cell;
