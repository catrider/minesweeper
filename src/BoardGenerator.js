function generate(height, width, numberOfMines) {
    const mineCoordinates = randomMineCoordinates(height, width, numberOfMines);
    const board = [];
    for( let x = 0; x < height; x++ ) {
	const row = [];
	for( let y = 0; y < width; y++ ) {
	    const isMine = mineCoordinates.find(([rx, ry]) => rx == x && ry == y);
	    row[y] = isMine ? 'MINE' : '';
	}
	board.push(row);
    }
    return board;
}

function randomMineCoordinates(height, width, numberOfMines) {
    return xRandomNumbers0ThroughN(numberOfMines, height*width)
	.map(number => [Math.floor(number/width), number%width]);
}

function xRandomNumbers0ThroughN(x, n) {
    const array = [];
    for( let i = 0; i < n; i++ ) {
	array.push(i);
    }
    shuffle(array);
    return array.slice(0, x);
}

function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
	// Pick a random index
	let index = Math.floor(Math.random() * counter);

	// Decrease counter by 1
	counter--;

	// And swap the last element with it
	let temp = array[counter];
	array[counter] = array[index];
	array[index] = temp;
    }

    return array;
}

module.exports = generate;
