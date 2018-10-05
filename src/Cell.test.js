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
