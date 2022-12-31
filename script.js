
const container = document.querySelector('#container');

const controls = document.createElement('div');
controls.setAttribute('id', 'controls');
container.appendChild(controls);

const title = document.createElement('div');
title.setAttribute('id', 'title');
controls.appendChild(title);
title.textContent = 'Sketch Box';

const gridBox = document.createElement('div');
gridBox.setAttribute('id', 'gridBox');
container.appendChild(gridBox);

const gridSelector = document.createElement('button');
gridSelector.setAttribute('id', 'gridSelector');
controls.appendChild(gridSelector);
gridSelector.textContent = 'choose a canvas size';
gridSelector.onclick = () => getDropDown();

const dropDown = document.createElement('ul');
dropDown.setAttribute('id', 'dropDown');
controls.appendChild(dropDown);
dropDown.style.display = 'none';


const opt16 = document.createElement('li');
opt16.setAttribute('id', 'opt16');
opt16.classList.add('option');
opt16.textContent = '16 x 16 Canvas';
dropDown.appendChild(opt16);

const opt32 = document.createElement('li');
opt32.setAttribute('id', 'opt32');
opt32.classList.add('option');
opt32.textContent = '32 x 32 Canvas';
dropDown.appendChild(opt32);

const opt64 = document.createElement('li');
opt64.setAttribute('id', 'opt64');
opt64.classList.add('option');
opt64.textContent = '64 x 64 Canvas';
dropDown.appendChild(opt64);

const opt96 = document.createElement('li');
opt96.setAttribute('id', 'opt96');
opt96.classList.add('option');
opt96.textContent = '96 x 96 Canvas';
dropDown.appendChild(opt96);


function getDropDown() {
  dropDown.style.display = 'block';
}

let canvasSize;

const canvas = document.querySelectorAll('.option');

function resetCanvas(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

canvas.forEach((canvas) => {
  canvas.addEventListener('click', () => {
    resetCanvas(gridBox);
    canvasSize = canvas.id;
    if (canvasSize === 'opt16') {
      grid16();
    } else if (canvasSize === 'opt32') {
      grid32();
    } else if (canvasSize === 'opt64') {
      grid64();
    } else if (canvasSize === 'opt96') {
      grid96();
    }
    dropDown.style.display = 'none';
    const boxes = document.querySelectorAll('.box');
        boxes.forEach((boxes) => {
        boxes.addEventListener('mouseover', () => {
        boxes.style.backgroundColor = 'rgba(171, 122, 217, 0.408)';
      });
    });
  });
});


let input;

function createCustom() {
  input = prompt('Enter a number from 1 - 99');
  if (input < 100 && input > 0) {
    return input;
  } else if (input > 99 || input <= 0) {
    alert('Please try again.');
  }
}

let percentage = '(pixels / input) + ' % '';
function drawGrid(input) {
  let percentage = (1 / input * 100).toFixed(3) + '%';
  for (let i = 0; i < input * input; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.height = percentage;
    box.style.width = percentage;
    gridBox.appendChild(box);
  }
}

