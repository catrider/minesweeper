class BoardAnalyzer {

    getSurroundingMineCount(board, row, column) {
	const coordinatesToCheck = this._getSurroundingCoordinates(row, column, board.length, board[0].length);
	return coordinatesToCheck
	    .map(([x, y]) => board[x][y].value)
	    .filter(value => value === 'MINE')
	    .length;
	
    }
    
    uncoverCell(board, uncoveredRow, uncoveredColumn) {
	if( board[uncoveredRow][uncoveredColumn].status === 'REVEALED' ) {
	    return board;
	}
        let newBoard = Array(board.length);
        for( let row = 0; row < board.length; row++ ) {
	    newBoard[row] = [];
            for( let column = 0; column < board[row].length; column++ ) {
		const currentCell = board[row][column];
		const currentValue = currentCell.value;
		let newStatus;
		if( row === uncoveredRow && column === uncoveredColumn ) {
		    newStatus = 'REVEALED';
		} else {
		    newStatus = currentCell.status;
		}
		newBoard[row][column] = {
		    status: newStatus,
		    value: currentValue
		};
            }
        }
	if( this.getSurroundingMineCount(newBoard, uncoveredRow, uncoveredColumn) === 0 && newBoard[uncoveredRow][uncoveredColumn].value !== 'MINE' ) {
	    const coordinatesToUncover = this._getSurroundingCoordinates(uncoveredRow, uncoveredColumn, newBoard.length, newBoard[0].length);
	    for( let i = 0; i < coordinatesToUncover.length; i++ ) {
		const [rowToUncover, columnToUncover] = coordinatesToUncover[i];
		newBoard = this.uncoverCell(newBoard, rowToUncover, columnToUncover);
	    }
	}
        return newBoard;
    }

    _getSurroundingCoordinates(row, column, boardHeight, boardWidth) {
	const coordinatesToCheck = [];
	for( let x = Math.max(row - 1, 0); x <= Math.min(row + 1, boardHeight - 1); x++) {
	    for( let y = Math.max(column - 1, 0); y <= Math.min(column + 1, boardWidth - 1); y++) {
		if( !(x === row && y === column) ) {
		    coordinatesToCheck.push([x, y]);
		}
	    }
	}
	return coordinatesToCheck;
    }
    
}

export default BoardAnalyzer;
