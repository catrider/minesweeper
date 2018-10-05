import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {

    render() {
	const contentToUnveil = this.getContentToUnveil(this.props.value, this.props.status, this.props.surroundingMineCountFn);
	return <td className="cell" onClick={(e) => this.props.handleClickFn(e)}><span>&nbsp;{contentToUnveil}&nbsp;</span></td>;
    }

    getContentToUnveil(cellValue, cellStatus, surroundingMineCountFn) {
	const surroundingMineCount = surroundingMineCountFn();
	let contentToUnveil;
	if( cellStatus === 'REVEALED' ) {
	    if( cellValue === 'MINE' ) {
		contentToUnveil = 'M';
	    } else if( surroundingMineCount === 0 ) {
		contentToUnveil = '';
	    } else {
		contentToUnveil = surroundingMineCount;
	    }
	} else if( cellStatus === 'FLAGGED' ) {
	    contentToUnveil = 'F';
	} else {
	    contentToUnveil = '';
	}
	return contentToUnveil;
    }

}

export default Cell;
