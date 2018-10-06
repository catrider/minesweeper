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
	if( board[uncoveredRow][uncoveredColumn].value === 'MINE' ) {
	    return this._revealEntireBoard(board);
	}
        let newBoard = this._copyBoard(board);
	newBoard[uncoveredRow][uncoveredColumn].status = 'REVEALED';
	if( this.getSurroundingMineCount(newBoard, uncoveredRow, uncoveredColumn) === 0 && newBoard[uncoveredRow][uncoveredColumn].value !== 'MINE' ) {
	    const coordinatesToUncover = this._getSurroundingCoordinates(uncoveredRow, uncoveredColumn, newBoard.length, newBoard[0].length);
	    for( let i = 0; i < coordinatesToUncover.length; i++ ) {
		const [rowToUncover, columnToUncover] = coordinatesToUncover[i];
		newBoard = this.uncoverCell(newBoard, rowToUncover, columnToUncover);
	    }
	}
        return newBoard;
    }

    toggleFlagCell(board, row, column) {
	let newBoard = this._copyBoard(board);
	if( newBoard[row][column].status === 'HIDDEN' ) {
	    newBoard[row][column].status = 'FLAGGED';
	} else {
	    newBoard[row][column].status = 'HIDDEN';
	}
	return newBoard;
    }

    getBoardStatus(board) {
	let mineRevealed = false;
	let hiddenCellsExist = false;
	this._flatten(board)
	    .forEach(cell => {
		if (cell.status === 'REVEALED' && cell.value === 'MINE') {
		    mineRevealed = true;
		} else if (cell.status === 'HIDDEN') {
		    hiddenCellsExist = true;
		}
	    });
	let status;
	if( mineRevealed ) {
	    status = 'LOSS';
	} else if (hiddenCellsExist) {
	    status = 'IN_PROGRESS';
	}
	return status;
    }

    _copyBoard(board) {
	let newBoard = Array(board.length);
        for( let row = 0; row < board.length; row++ ) {
	    newBoard[row] = [];
            for( let column = 0; column < board[row].length; column++ ) {
		const currentCell = board[row][column];
		const currentValue = currentCell.value;
		const currentStatus = currentCell.status;
		newBoard[row][column] = {
		    status: currentStatus,
		    value: currentValue
		};
            }
        }
	return newBoard;
    }

    _revealEntireBoard(board) {
	let newBoard = Array(board.length);
        for( let row = 0; row < board.length; row++ ) {
	    newBoard[row] = [];
            for( let column = 0; column < board[row].length; column++ ) {
		const currentCell = board[row][column];
		const currentValue = currentCell.value;
		newBoard[row][column] = {
		    status: 'REVEALED',
		    value: currentValue
		};
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

    _flatten(board) {
	return [].concat(...board);
    }
    
}

export default BoardAnalyzer;
