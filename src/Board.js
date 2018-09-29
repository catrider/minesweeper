import React, { Component } from 'react';
import Cell from './Cell';

class Board extends Component {

    render() {
        const rows = [];
        for( let row = 0; row < this.props.board.length; row++ ) {
            const columns = [];
            for( let column = 0; column < this.props.board[row].length; column++ ) {
                columns.push(<td><Cell value={this.props.board[row][column]}/></td>);
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
    
}

export default Board;
