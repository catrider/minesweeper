import React, { Component } from 'react';
import Cell from './Cell';
import BoardAnalyzer from './BoardAnalyzer';
import './Board.css';

class Board extends Component {

    constructor(props) {
	super(props);
	this.boardAnalyzer = new BoardAnalyzer();
        this.state = {
            board: props.mineLayout
                .map(row => {
                    return row.map(cell => ({
                        status: 'HIDDEN',
                        value: cell
                    }));
                })
        };
    }

    render() {
        const rows = [];
        for( let row = 0; row < this.state.board.length; row++ ) {
            const columns = [];
            for( let column = 0; column < this.state.board[row].length; column++ ) {
                const cell = this.state.board[row][column];
                columns.push(<Cell key={`${row}${column}`} status={cell.status} value={cell.value} surroundingMineCountFn={this.getSurroundingMineCountFn(row, column)} handleClickFn={(event) => this.onCellClick(row, column, event)}/>);
            }
            rows.push(
                <tr key={`row-${row}`}>
                  {columns}
                </tr>
            );
        }
        return (
	    <table id="board">
	      <tbody>
                {rows}
              </tbody>
            </table>
        );
    }

    getSurroundingMineCountFn(row, column) {
	return () => {
	    return this.boardAnalyzer.getSurroundingMineCount(this.state.board, row, column);
	}
    }

    onCellClick(row, column, event) {
	let newBoard;
	if( !event.ctrlKey ) {
	    newBoard = this.boardAnalyzer.uncoverCell(this.state.board, row, column)
	} else {
	    newBoard = this.boardAnalyzer.toggleFlagCell(this.state.board, row, column);
	    event.preventDefault();
	}
        this.setState({
            board: newBoard
        });
    }

}

export default Board;
