import BoardAnalyzer from './BoardAnalyzer';

test('it gets surrounding mine count for inner cell', () => {
    const boardAnalyzer = new BoardAnalyzer();

    const board = [
	['MINE', '', 'MINE'],
	['MINE', '', ''],
	['', 'MINE', ''],
    ];

    const count = boardAnalyzer.getSurroundingMineCount(board, 1, 1);
    
    expect(count).toBe(4);
});

test('it gets surrounding mine count for right outer cell', () => {
    const boardAnalyzer = new BoardAnalyzer();

    const board = [
	['MINE', '', 'MINE'],
	['MINE', '', ''],
	['', 'MINE', ''],
    ];

    const count = boardAnalyzer.getSurroundingMineCount(board, 1, 2);
    
    expect(count).toBe(2);
});

test('it gets surrounding mine count for left outer cell', () => {
    const boardAnalyzer = new BoardAnalyzer();

    const board = [
	['MINE', '', 'MINE'],
	['', '', ''],
	['MINE', 'MINE', ''],
    ];

    const count = boardAnalyzer.getSurroundingMineCount(board, 1, 0);
    
    expect(count).toBe(3);
});

test('it gets surrounding mine count for top outer cell', () => {
    const boardAnalyzer = new BoardAnalyzer();

    const board = [
	['MINE', '', 'MINE'],
	['MINE', '', ''],
	['', 'MINE', ''],
    ];

    const count = boardAnalyzer.getSurroundingMineCount(board, 0, 1);
    
    expect(count).toBe(3);
});

test('it gets surrounding mine count for bottom outer cell', () => {
    const boardAnalyzer = new BoardAnalyzer();

    const board = [
	['MINE', '', 'MINE'],
	['MINE', '', ''],
	['', '', ''],
    ];

    const count = boardAnalyzer.getSurroundingMineCount(board, 2, 1);
    
    expect(count).toBe(1);
});

test('it gets surrounding mine count for corner cell', () => {
    const boardAnalyzer = new BoardAnalyzer();

    const board = [
	['MINE', '', 'MINE'],
	['MINE', '', ''],
	['', '', ''],
    ];

    const count = boardAnalyzer.getSurroundingMineCount(board, 2, 0);
    
    expect(count).toBe(1);
});

test('it does not include the cell itself', () => {
    const boardAnalyzer = new BoardAnalyzer();

    const board = [
	['MINE', '', 'MINE'],
	['MINE', 'MINE', ''],
	['', '', ''],
    ];

    const count = boardAnalyzer.getSurroundingMineCount(board, 1, 1);
    
    expect(count).toBe(3);
});
