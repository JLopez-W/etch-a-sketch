
const container = document.querySelector('#container');

function grid16() {
  for(let i = 0; i < 256; i++) {
   const box16 = document.createElement('div');
   box16.classList.add('box16');
   container.appendChild(box16);      
  }
}

//grid16();

function grid32() {
    for(let i = 0; i < 1024; i++) {
     const box32 = document.createElement('div');
     box32.classList.add('box32');
     container.appendChild(box32);      
    }
  }
  
grid32();


box16 = document.querySelectorAll('.box16');
box32 = document.querySelectorAll('.box32');

box16.forEach((box16) => {
    box16.addEventListener('mouseover', () => {
    box16.style.backgroundColor = 'rgba(171, 122, 217, 0.408)';
    });
});


box32.forEach((box32) => {
    box32.addEventListener('mouseover', () => {
    box32.style.backgroundColor = 'rgba(171, 122, 217, 0.408)';
    });
});

