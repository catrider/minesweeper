import Cell from './Cell';

test('getContentToUnveil returns a M is value is MINE', () => {
    expect(new Cell().getContentToUnveil('MINE', 'REVEALED', () => 2)).toBe('M');
    expect(new Cell().getContentToUnveil('', 'REVEALED', () => 4)).toBe(4);
    expect(new Cell().getContentToUnveil('', 'REVEALED', () => 0)).toBe('');
    expect(new Cell().getContentToUnveil('', 'REVEALED', () => 0)).toBe('');
    expect(new Cell().getContentToUnveil('', 'FLAGGED', () => 1)).toBe('F');
    expect(new Cell().getContentToUnveil('MINE', 'FLAGGED', () => 1)).toBe('F');
    expect(new Cell().getContentToUnveil('MINE', 'HIDDEN', () => 2)).toBe('');
    expect(new Cell().getContentToUnveil('', 'HIDDEN', () => 4)).toBe('');
    expect(new Cell().getContentToUnveil('', 'HIDDEN', () => 0)).toBe('');
    expect(new Cell().getContentToUnveil('', 'HIDDEN', () => 0)).toBe('');
    expect(new Cell().getContentToUnveil('', 'HIDDEN', () => 1)).toBe('');
    expect(new Cell().getContentToUnveil('MINE', 'HIDDEN', () => 1)).toBe('');
});

test('getClasses', () => {
    expect(new Cell().getClasses('', 'REVEALED', () => 1)).toBe('cell one');
    expect(new Cell().getClasses('', 'REVEALED', () => 2)).toBe('cell two');
    expect(new Cell().getClasses('', 'REVEALED', () => 3)).toBe('cell three');
    expect(new Cell().getClasses('', 'REVEALED', () => 4)).toBe('cell four');
    expect(new Cell().getClasses('', 'REVEALED', () => 5)).toBe('cell five');
    expect(new Cell().getClasses('', 'REVEALED', () => 6)).toBe('cell six');
    expect(new Cell().getClasses('', 'REVEALED', () => 7)).toBe('cell seven');
    expect(new Cell().getClasses('', 'REVEALED', () => 8)).toBe('cell eight');
    expect(new Cell().getClasses('', 'HIDDEN', () => 2)).toBe('cell');
    expect(new Cell().getClasses('', 'HIDDEN', () => 4)).toBe('cell');
    expect(new Cell().getClasses('', 'HIDDEN', () => 7)).toBe('cell');
    expect(new Cell().getClasses('MINE', 'HIDDEN', () => 4)).toBe('cell');
    expect(new Cell().getClasses('MINE', 'REVEALED', () => 7)).toBe('cell mine');
});
