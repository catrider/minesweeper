class BoardAnalyzer {

    getSurroundingMineCount(board, row, column) {
	const coordinatesToCheck = this._getCoordinatesToCheck(row, column, board.length, board[0].length);
	return coordinatesToCheck
	    .map(([x, y]) => board[x][y])
	    .filter(value => value === 'MINE')
	    .length;
	
    }

    _getCoordinatesToCheck(row, column, boardHeight, boardWidth) {
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
