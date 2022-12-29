
const container = document.querySelector('#container');

function grid16() {
  for(let i = 0; i < 256; i++) {
   const box = document.createElement('div');
   box.classList.add('box');
   container.appendChild(box);      
  }
}

grid16();


