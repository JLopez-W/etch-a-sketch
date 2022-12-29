
const container = document.querySelector('#container');

function grid16() {
  for(let i = 0; i < 256; i++) {
   const box = document.createElement('div');
   box.classList.add('box');
   container.appendChild(box);      
  }
}

grid16();


const box = document.querySelectorAll('.box');


box.forEach((box) => {
    box.addEventListener('mouseover', () => {
    box.style.backgroundColor = 'rgba(171, 122, 217, 0.408)';
    });
});
