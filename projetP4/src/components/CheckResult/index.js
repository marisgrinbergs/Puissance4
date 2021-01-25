export const checkResult = board => {
	const result = checkVertical(board) || checkHorizontal(board) || checkDiagonalRight(board) || checkDiagonalLeft(board) || checkDraw(board);
	return result && result;
}
export const checkVertical = board => {
	for (let row = 3; row < 6; ++row) {
		console.log("row ", row);
		for (let column = 0; column < 7; ++column) {
			console.log("col ", column)
			if (board[row][column]) {
				if (board[row][column] === board[row - 1][column] &&
						board[row][column] === board[row - 2][column] &&
						board[row][column] === board[row - 3][column]) {
					return board[row][column];
				}
			}
		}
	}
}

export const checkHorizontal = board => {
	for (let row = 0; row < 6; ++row) {
		for (let column = 0; column < 4; ++column) {
			if (board[row][column]) {
				if (board[row][column] === board[row][column + 1] &&
						board[row][column] === board[row][column + 2] &&
						board[row][column] === board[row][column + 3]) {
					return board[row][column];
				}
			}
		}
	}
}

export const checkDiagonalRight = board => {
	for (let row = 3; row < 6; ++row) {
		for (let column = 0; column < 4; ++column) {
			if (board[row][column]) {
				if (board[row][column] === board[row - 1][column + 1] &&
						board[row][column] === board[row - 2][column + 2] &&
						board[row][column] === board[row - 3][column + 3]) {
					return board[row][column];
				}
			}
		}
	}
}

export const checkDiagonalLeft = board => {
	for (let row = 3; row < 6; ++row) {
		for (let column = 3; column < 7; ++column) {
			if (board[row][column]) {
				if (board[row][column] === board[row - 1][column - 1] &&
						board[row][column] === board[row - 2][column - 2] &&
						board[row][column] === board[row - 3][column - 3]) {
					return board[row][column];
				}
			}
		}
	}
}

export const checkDraw = board => {
	for (let row = 0; row < 6; ++row) {
		for (let column = 0; column < 7; ++column) {
			if (board[row][column] === null) {
				return null;
			}
		}
	}
	return 'Tie';
}
