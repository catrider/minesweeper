import Cell from './Cell';

test('getContentToUnveil returns a M is value is MINE', () => {
    expect(new Cell().getContentToUnveil('MINE', () => 2)).toBe('M');
    expect(new Cell().getContentToUnveil('', () => 4)).toBe(4);
    expect(new Cell().getContentToUnveil('', () => 0)).toBe('');
});
