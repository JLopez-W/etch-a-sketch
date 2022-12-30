
const container = document.querySelector('#container');

const controls = document.createElement('div');
controls.setAttribute('id','controls');
container.appendChild(controls);

const title = document.createElement('div');
title.setAttribute('id','title');
controls.appendChild(title);
title.textContent = 'Sketch Box';

const gridSelector = document.createElement('button');
gridSelector.setAttribute('id','gridSelector');
controls.appendChild(gridSelector);
gridSelector.textContent = 'choose a grid';

const gridBox = document.createElement('div');
gridBox.setAttribute('id','gridBox');
container.appendChild(gridBox);


function grid16() {
  for(let i = 0; i < 256; i++) {
   const box16 = document.createElement('div');
   box16.classList.add('box16');
   box16.style.height = '6%';
   box16.style.width = '6%';
   gridBox.appendChild(box16);     
  }
}

grid16();

function grid32() {
    for(let i = 0; i < 1024; i++) {
     const box32 = document.createElement('div');
     box32.classList.add('box32');
     box32.style.height = '2.9%';
     box32.style.width = '2.9%';
     gridBox.appendChild(box32);      
    }
  }
  
  //grid32();

function grid64() {
    for(let i = 0; i < 4096; i++) {
     const box64 = document.createElement('div');
     box64.classList.add('box64');
     box64.style.height = '1.375%';
     box64.style.width = '1.375%';
     gridBox.appendChild(box64);      
    }
  }
  
//grid64();

function grid96() {
    for(let i = 0; i < 9216; i++) {
     const box96 = document.createElement('div');
     box96.classList.add('box96');
     box96.style.height = '.875%';
     box96.style.width = '.875%';
     gridBox.appendChild(box96);      
    }
  }
  
//grid96();


box16 = document.querySelectorAll('.box16');
box32 = document.querySelectorAll('.box32');
box64 = document.querySelectorAll('.box64');
box96 = document.querySelectorAll('.box96');

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

box64.forEach((box64) => {
    box64.addEventListener('mouseover', () => {
    box64.style.backgroundColor = 'rgba(171, 122, 217, 0.408)';
    });
});

box96.forEach((box96) => {
    box96.addEventListener('mouseover', () => {
    box96.style.backgroundColor = 'rgba(171, 122, 217, 0.408)';
    });
});
