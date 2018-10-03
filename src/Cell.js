import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {

    render() {
	const contentToUnveil = this.getContentToUnveil(this.props.value, this.props.surroundingMineCountFn);
        const content = this.props.status === 'REVEALED' ? contentToUnveil : '';
	return <td className="cell" onClick={() => this.props.handleClickFn()}><span>&nbsp;{content}&nbsp;</span></td>;
    }

    getContentToUnveil(cellValue, surroundingMineCountFn) {
	const surroundingMineCount = surroundingMineCountFn();
	let contentToUnveil;
	if( cellValue === 'MINE' ) {
	    contentToUnveil = 'M';
	} else if( surroundingMineCount === 0 ) {
	    contentToUnveil = '';
	} else {
	    contentToUnveil = surroundingMineCount;
	}
	return contentToUnveil;
    }

}

export default Cell;
