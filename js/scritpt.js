let grid = document.querySelector('.grid');
console.log(grid);

let gridItem;
for (i = 1; i <= 100; i++) {
    gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    console.log(gridItem);

    grid.append(gridItem);
}