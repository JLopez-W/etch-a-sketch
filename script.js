
const container = document.querySelector('#container');


function grid16() {
  for(let i = 0; i < 256; i++) {
   const grid = document.createElement('div');
   grid.classList.add('grid');
   container.appendChild(grid);      
}
}

grid16();
