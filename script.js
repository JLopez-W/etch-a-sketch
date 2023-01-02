const gridBox = document.querySelector('#gridBox');

const gridSelector = document.querySelector('#gridSelector');
gridSelector.onclick = () => getGridDropdown();


const gridDropdown = document.querySelector('#gridDropdown');

function getGridDropdown() {
  gridDropdown.style.display = 'block';
  colorBox.style.display = 'none';
  penDropdown.style.display = 'none';
}

const rainbow = document.querySelector('#rainbow');
const colorArray = ['#FFF', '#931010', '#dd612c', '#ffd500', '#70a423', '#68abdf', '#ab7ad9', '#dea1b9'];

const penDropdown = document.querySelector('#penDropdown');
penDropdown.onclick = () => getColorBox();

const colorBox = document.querySelector('#colorBox');

function getColorBox() {
  colorBox.style.display = 'flex';
  colorBox.style.flexWrap = 'wrap';
}

const canvas = document.querySelectorAll('.option');
const pen = document.querySelectorAll('.pen');

function resetCanvas(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

let input;

canvas.forEach((canvas) => {
  canvas.addEventListener('click', () => {
    resetCanvas(gridBox);
    let canvasSize = canvas.id;
     if (canvasSize.includes('Xno')) {
          createCustom();
          console.log(input);
          drawNoLines(input);
    } else if (canvasSize.includes('X')) {
          createCustom();
          console.log(input);
          drawGrid(input);
     } else if (canvasSize.includes('no')) {
          console.log(canvasSize);
          getInputFromString(canvasSize);
          console.log(input);
          drawNoLines(input);
     } else {
          getInputFromString(canvasSize);
          drawGrid(input);
    }
    
    gridDropdown.style.display = 'none';
    penDropdown.style.display = 'block';
    getColorBox();
  });
});
    pen.forEach((pen) => { 
    pen.addEventListener('click', () => { 
    let penColor = pen.id;
    
    const boxes = document.querySelectorAll('.box, .boxNo');
        
    boxes.forEach((boxes) => {
    boxes.addEventListener('mouseover', () => { 
      if (penColor === 'rainbow') {
          boxes.style.backgroundColor = colorArray[ Math.round( Math.random() * colorArray.length ) ];
        } else {
          boxes.style.backgroundColor = penColor;
        } 

      });
    });
  });
});


function createCustom() {
  input = prompt('Enter a number from 2 - 99');
  if (input < 100 && input > 1) {
    return input;
  } else if (input > 99 || input < 2) {
    alert ('Sorry, that won\'t work.\nNumber must be between 2 and 99.\nPlease try again.');
    input = false;
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


function drawNoLines(input) {
  let percentage = (1 / input * 100).toFixed(3) + '%';
  for (let i = 0; i < input * input; i++) {
    const boxNo = document.createElement('div');
    boxNo.classList.add('boxNo');
    boxNo.style.height = percentage;
    boxNo.style.width = percentage;
    gridBox.appendChild(boxNo);
  }
}


function getInputFromString(canvasSize) {
  let gridOption = Array.from(canvasSize);
  const newArray = gridOption.slice(3);
  let newString = newArray.join('');
  return input = newString.slice(0,2);
}
