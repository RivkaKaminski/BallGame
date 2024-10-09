function createGrid(rows, cols) {
    const board = document.getElementById('gameBoard');

    for (let i = 0; i < rows * cols; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        board.appendChild(div);
    }
}

// יצירת לוח משחק של 10x10
createGrid(10, 10);