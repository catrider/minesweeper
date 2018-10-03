import BoardAnalyzer from './BoardAnalyzer';

test('it gets surrounding mine count for inner cell', () => {
    const boardAnalyzer = new BoardAnalyzer();

    const board = [
	[{value: 'MINE'}, {value: ''}, {value: 'MINE'}],
	[{value: 'MINE'}, {value: ''}, {value: ''}],
	[{value: ''}, {value: 'MINE'}, {value: ''}],
    ];

    const count = boardAnalyzer.getSurroundingMineCount(board, 1, 1);
    
    expect(count).toBe(4);
});

test('it gets surrounding mine count for right outer cell', () => {
    const boardAnalyzer = new BoardAnalyzer();

    const board = [
	[{value: 'MINE'}, {value: ''}, {value: 'MINE'}],
	[{value: 'MINE'}, {value: ''}, {value: ''}],
	[{value: ''}, {value: 'MINE'}, {value: ''}],
    ];

    const count = boardAnalyzer.getSurroundingMineCount(board, 1, 2);
    
    expect(count).toBe(2);
});

test('it gets surrounding mine count for left outer cell', () => {
    const boardAnalyzer = new BoardAnalyzer();

    const board = [
	[{value: 'MINE'}, {value: ''}, {value: 'MINE'}],
	[{value: ''}, {value: ''}, {value: ''}],
	[{value: 'MINE'}, {value: 'MINE'}, {value: ''}],
    ];

    const count = boardAnalyzer.getSurroundingMineCount(board, 1, 0);
    
    expect(count).toBe(3);
});

test('it gets surrounding mine count for top outer cell', () => {
    const boardAnalyzer = new BoardAnalyzer();

    const board = [
	[{value: 'MINE'}, {value: ''}, {value: 'MINE'}],
	[{value: 'MINE'}, {value: ''}, {value: ''}],
	[{value: ''}, {value: 'MINE'}, {value: ''}],
    ];

    const count = boardAnalyzer.getSurroundingMineCount(board, 0, 1);
    
    expect(count).toBe(3);
});

test('it gets surrounding mine count for bottom outer cell', () => {
    const boardAnalyzer = new BoardAnalyzer();

    const board = [
	[{value: 'MINE'}, {value: ''}, {value: 'MINE'}],
	[{value: 'MINE'}, {value: ''}, {value: ''}],
	[{value: ''}, {value: ''}, {value: ''}],
    ];

    const count = boardAnalyzer.getSurroundingMineCount(board, 2, 1);
    
    expect(count).toBe(1);
});

test('it gets surrounding mine count for corner cell', () => {
    const boardAnalyzer = new BoardAnalyzer();

    const board = [
	[{value: 'MINE'}, {value: ''}, {value: 'MINE'}],
	[{value: 'MINE'}, {value: ''}, {value: ''}],
	[{value: ''}, {value: ''}, {value: ''}],
    ];

    const count = boardAnalyzer.getSurroundingMineCount(board, 2, 0);
    
    expect(count).toBe(1);
});

test('it does not include the cell itself', () => {
    const boardAnalyzer = new BoardAnalyzer();

    const board = [
	[{value: 'MINE'}, {value: ''}, {value: 'MINE'}],
	[{value: 'MINE'}, {value: 'MINE'}, {value: ''}],
	[{value: ''}, {value: ''}, {value: ''}],
    ];

    const count = boardAnalyzer.getSurroundingMineCount(board, 1, 1);
    
    expect(count).toBe(3);
});

test('uncoverCell uncovers the cell', () => {
    const boardAnalyzer = new BoardAnalyzer();
    
    const board = [
	[{status: 'HIDDEN', value: 'MINE'}, {status: 'HIDDEN', value: ''}, {status: 'HIDDEN', value:''}],
	[{status: 'HIDDEN', value: 'MINE'}, {status: 'HIDDEN', value: ''}, {status: 'HIDDEN', value:''}],
	[{status: 'HIDDEN', value: 'MINE'}, {status: 'HIDDEN', value: ''}, {status: 'HIDDEN', value:''}]
    ];
    
    const newBoard = boardAnalyzer.uncoverCell(board, 2, 1);
    
    expect(newBoard.length).toBe(3);
    expect(newBoard[0].length).toBe(3);
    expect(newBoard[0][0]).toEqual({status: 'HIDDEN', value:'MINE'});
    expect(newBoard[0][1]).toEqual({status: 'HIDDEN', value:''});
    expect(newBoard[0][2]).toEqual({status: 'HIDDEN', value:''});
    expect(newBoard[1].length).toBe(3);
    expect(newBoard[1][0]).toEqual({status: 'HIDDEN', value:'MINE'});
    expect(newBoard[1][1]).toEqual({status: 'HIDDEN', value:''});
    expect(newBoard[1][2]).toEqual({status: 'HIDDEN', value:''});
    expect(newBoard[2].length).toBe(3);
    expect(newBoard[2][0]).toEqual({status: 'HIDDEN', value:'MINE'});
    expect(newBoard[2][1]).toEqual({status: 'REVEALED', value:''});
    expect(newBoard[2][2]).toEqual({status: 'HIDDEN', value:''});
    
});

test('uncoverCell uncovers the cell and all surrounding non-mine cells if the cells has no mines surrouding it', () => {
    const boardAnalyzer = new BoardAnalyzer();
    
    const board = [
	[{status: 'HIDDEN', value: ''}, {status: 'HIDDEN', value: ''}, {status: 'HIDDEN', value:''}],
	[{status: 'HIDDEN', value: ''}, {status: 'HIDDEN', value: ''}, {status: 'HIDDEN', value:''}],
	[{status: 'HIDDEN', value: ''}, {status: 'HIDDEN', value: ''}, {status: 'HIDDEN', value:''}]
    ];
    
    const newBoard = boardAnalyzer.uncoverCell(board, 2, 1);
    
    expect(newBoard.length).toBe(3);
    expect(newBoard[0].length).toBe(3);
    expect(newBoard[0][0]).toEqual({status: 'REVEALED', value:''});
    expect(newBoard[0][1]).toEqual({status: 'REVEALED', value:''});
    expect(newBoard[0][2]).toEqual({status: 'REVEALED', value:''});
    expect(newBoard[1].length).toBe(3);
    expect(newBoard[1][0]).toEqual({status: 'REVEALED', value:''});
    expect(newBoard[1][1]).toEqual({status: 'REVEALED', value:''});
    expect(newBoard[1][2]).toEqual({status: 'REVEALED', value:''});
    expect(newBoard[2].length).toBe(3);
    expect(newBoard[2][0]).toEqual({status: 'REVEALED', value:''});
    expect(newBoard[2][1]).toEqual({status: 'REVEALED', value:''});
    expect(newBoard[2][2]).toEqual({status: 'REVEALED', value:''});
    
});

test('uncoverCell uncovers the cell only if it is a mine', () => {
    const boardAnalyzer = new BoardAnalyzer();
    
    const board = [
	[{status: 'HIDDEN', value: ''}, {status: 'HIDDEN', value: ''}, {status: 'HIDDEN', value:''}],
	[{status: 'HIDDEN', value: ''}, {status: 'HIDDEN', value: ''}, {status: 'HIDDEN', value:''}],
	[{status: 'HIDDEN', value: ''}, {status: 'HIDDEN', value: 'MINE'}, {status: 'HIDDEN', value:''}]
    ];
    
    const newBoard = boardAnalyzer.uncoverCell(board, 2, 1);
    
    expect(newBoard.length).toBe(3);
    expect(newBoard[0].length).toBe(3);
    expect(newBoard[0][0]).toEqual({status: 'HIDDEN', value:''});
    expect(newBoard[0][1]).toEqual({status: 'HIDDEN', value:''});
    expect(newBoard[0][2]).toEqual({status: 'HIDDEN', value:''});
    expect(newBoard[1].length).toBe(3);
    expect(newBoard[1][0]).toEqual({status: 'HIDDEN', value:''});
    expect(newBoard[1][1]).toEqual({status: 'HIDDEN', value:''});
    expect(newBoard[1][2]).toEqual({status: 'HIDDEN', value:''});
    expect(newBoard[2].length).toBe(3);
    expect(newBoard[2][0]).toEqual({status: 'HIDDEN', value:''});
    expect(newBoard[2][1]).toEqual({status: 'REVEALED', value:'MINE'});
    expect(newBoard[2][2]).toEqual({status: 'HIDDEN', value:''});
    
});
