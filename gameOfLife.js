/**
 * These example boards represent the row and column of live cells, where an empty array
 * represents an empty row. Feel free to keep this data structure or change it to something
 * that works better for you.
 */
// export const BLOCK_BOARD = {
const BLOCK_BOARD = {
	0: [],
	1: [1, 2],
	2: [1, 2],
	3: [],
};

// export const BLINKER_BOARD = {
// 	0: [],
// 	1: [2],
// 	2: [2],
// 	3: [2],
// 	4: [],
// };

// Implement the Game of Life here to transform the inputBoard into the outputBoard!
function getNextGeneration(inputBoard) {
	// export function getNextGeneration(inputBoard) {
	if (!Object.keys(inputBoard).length) return {};
	let max = Object.keys(inputBoard).reduce((a, b) =>
		parseInt(a) > parseInt(b) ? a : b
	);
	let outputBoard = {};
	for (let i = 0; i <= max; i++) {
		outputBoard[i] = [];
	}

	const countNeighbors = (x, y) => {
		let liveNeighborCount = 0;
		let isLive = inputBoard[y].includes(x);
		if (isLive) liveNeighborCount--;

		let rowArr = [inputBoard[y]];
		if (y != 0) rowArr.push(inputBoard[y - 1]);
		if (y < max) rowArr.push(inputBoard[y + 1]);

		for (let row of rowArr) {
			if (!row.length) continue;
			if (row.includes(x - 1)) {
				liveNeighborCount++;
			}
			if (row.includes(x)) {
				liveNeighborCount++;
			}
			if (row.includes(x + 1)) {
				liveNeighborCount++;
			}
			console.log(liveNeighborCount, row, x, y);
		}
		return liveNeighborCount;
	};

	for (let i = 0; i <= max; i++) {
		for (let j = 0; j <= max; j++) {
			let neighborCount = countNeighbors(j, i);
			if (inputBoard[i].includes(j)) {
				if (neighborCount < 2 || neighborCount > 3) {
					continue;
				} else {
					outputBoard[i].push(j);
				}
			} else {
				if (neighborCount === 3) outputBoard[i].push(j);
			}
		}
	}

	return outputBoard;
}

console.log(getNextGeneration(BLOCK_BOARD));
