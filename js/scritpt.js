let difficult = 10; // Cambia il numero per cambiare la dimensione della griglia
let limit = Math.pow(difficult, 2);
    console.log(limit);
let grid = document.querySelector('.grid');
    console.log(grid);

document.getElementById('start').addEventListener('click', gridWithSquares);

// FUNCTIONS

/**
 * Description // ADD: n 'clickable' squares in a grid
 * @returns {Object} // squares -> grid items
 */
function gridWithSquares() {
    grid.innerHTML = ''; // Ripulisco griglia

    for (let i = 1; i <= limit; i++) {
        let gridItem = newGridSquare(i, difficult);
        gridItem.addEventListener('click', function() {
        this.classList.add('active');
        })
        grid.append(gridItem);
    }

    return grid;
}

/**
 * Description // Generate n numer of squares
 * @param {Number} spanText // Number to insert into the square
 * @returns {Object} // Grid HTML item square with numer inside
 */
function newGridSquare(spanText, rowColQuantity) {
    const newSquare = document.createElement("div");
    newSquare.innerHTML = `<span>${spanText}</span>`;
    newSquare.style.width = `calc(100% / ${rowColQuantity})`;
    newSquare.style.height = `calc(100% / ${rowColQuantity})`;
    newSquare.classList.add("grid-item");

    return newSquare;
}