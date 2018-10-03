import React, { Component } from 'react';
import Cell from './Cell';
import BoardAnalyzer from './BoardAnalyzer';

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
                columns.push(<td key={`${row}${column}`}><Cell status={cell.status} value={cell.value} surroundingMineCountFn={this.getSurroundingMineCountFn(row, column)} handleClickFn={() => this.onCellClick(row, column)}/></td>);
            }
            rows.push(
                <tr key={`row-${row}`}>
                  {columns}
                </tr>
            );
        }
        return (
	    <table>
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

    onCellClick(row, column) {
        this.setState({
            board: this.boardAnalyzer.uncoverCell(this.state.board, row, column)
        });
    }

}

export default Board;
