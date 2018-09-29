const generate = require('./BoardGenerator');

test('generates a board', () => {
    const board = generate(2, 4, 3);

    expect(board.length).toBe(2);
    expect(board[0].length).toBe(4);
    expect(board[1].length).toBe(4);
    
    let numberOfBombs = 0;
    for( let x = 0; x < 2; x++ ) {
	for( let y = 0; y < 4; y++ ) {
	    if( board[x][y] == 'MINE' ) {
		numberOfBombs++;
	    }
	}
    }

    expect(numberOfBombs).toBe(3);
});
