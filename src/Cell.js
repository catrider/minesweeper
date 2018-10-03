import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {

    render() {
	const contentToUnveil = this.props.value === 'MINE' ? 'M' : this.props.surroundingMineCountFn(); 
        const content = this.props.status === 'REVEALED' ? contentToUnveil : '';
	return <td className="cell" onClick={() => this.props.handleClickFn()}><span>&nbsp;{content}&nbsp;</span></td>;
    }

}

export default Cell;
