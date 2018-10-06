import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {

    render() {
	const contentToUnveil = this.getContentToUnveil(this.props.value, this.props.status, this.props.surroundingMineCountFn);
	const classes = this.getClasses(this.props.value, this.props.status, this.props.surroundingMineCountFn);
	return <td className={classes} onClick={(e) => this.props.handleClickFn(e)}><span>&nbsp;{contentToUnveil}&nbsp;</span></td>;
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

    getClasses(cellValue, cellStatus, surroundingMineCountFn) {
	let classes;
	if( cellStatus === 'REVEALED' && cellValue !== 'MINE' ) {
	    let mineCountClass;
	    const surroundingMineCount = surroundingMineCountFn();
	    if( surroundingMineCount === 1 ) {
		mineCountClass = "one";
	    } else if (surroundingMineCount === 2) {
		mineCountClass = "two";
	    } else if (surroundingMineCount === 3) {
		mineCountClass = "three";
	    } else if (surroundingMineCount === 4) {
		mineCountClass = "four";
	    } else if (surroundingMineCount === 5) {
		mineCountClass = "five";
	    } else if (surroundingMineCount === 6) {
		mineCountClass = "six";
	    } else if (surroundingMineCount === 7) {
		mineCountClass = "seven";
	    } else if (surroundingMineCount === 8) {
		mineCountClass = "eight";
	    }
	    classes = `cell ${mineCountClass}`;
	} else if (cellStatus === 'REVEALED' && cellValue === 'MINE') {
	    classes = 'cell mine';
	} else {
	    classes = 'cell';
	}
	return classes;
    }

}

export default Cell;
