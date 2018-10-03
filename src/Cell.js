import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {

    render() {
	const contentToUnveil = this.props.value === 'MINE' ? 'M' : this.props.surroundingMineCountFn(); 
        const content = this.props.status === 'REVEALED' ? contentToUnveil : '';
	return <span className="cell" onClick={() => this.props.handleClickFn()}>&nbsp;{content}&nbsp;</span>;
    }

}

export default Cell;
