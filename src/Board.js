import React, { Component } from 'react';
import Cell from './Cell';
import BoardAnalyzer from './BoardAnalyzer';

class Board extends Component {

    constructor(props) {
	super(props);
	this.boardAnalyzer = new BoardAnalyzer();
    }

    render() {
        const rows = [];
        for( let row = 0; row < this.props.board.length; row++ ) {
            const columns = [];
            for( let column = 0; column < this.props.board[row].length; column++ ) {
                columns.push(<td><Cell value={this.props.board[row][column]} surroundingMineCountFn={this.getSurroundingMineCountFn(row, column)}/></td>);
            }
            rows.push(
                <tr>
                  {columns}
                </tr>
            );
        }
        return (
            <table>
              {rows}
            </table>
        );
    }

    getSurroundingMineCountFn(row, column) {
	return () => {
	    return this.boardAnalyzer.getSurroundingMineCount(this.props.board, row, column);
	}
    }
    
}

export default Board;
