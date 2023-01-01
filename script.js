const gridBox = document.querySelector('#gridBox');

const gridSelector = document.querySelector('#gridSelector');
gridSelector.onclick = () => getDropDown();


const dropDown = document.querySelector('#dropDown');

function getDropDown() {
  dropDown.style.display = 'block';
}

const penDropdown = document.querySelector('#penDropdown');
penDropdown.onclick = () => getColorList();

const colorList = document.querySelector('#colorList');

function getColorList() {
  colorList.style.display = 'block';
}

const canvas = document.querySelectorAll('.option');
const pen = document.querySelectorAll('.pen');

function resetCanvas(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}


canvas.forEach((canvas) => {
  canvas.addEventListener('click', () => {
    resetCanvas(gridBox);
    let canvasSize = canvas.id;
    if (canvasSize === 'opt16') {
      input = 16;
      drawGrid(input);
    } else if (canvasSize === 'opt16no') {
      input = 16;
      drawNoLines(input);
    } else if (canvasSize === 'opt32') {
      input = 32;
      drawGrid(input);
    } else if (canvasSize === 'opt32no') {
      input = 32;
      drawNoLines(input);
    } else if (canvasSize === 'opt64') {
      input = 64;
      drawGrid(input);
    } else if (canvasSize === 'opt64no') {
      input = 64;
      drawNoLines(input);
    } else if (canvasSize === 'opt96') {
      input = 96;
      drawGrid(input);
    } else if (canvasSize === 'opt96no') {
      input = 96;
      drawNoLines(input);
    } else if (canvasSize === 'optX') {
      createCustom();
      drawGrid(input);
    } else if (canvasSize === 'optXno') {
      input = 32;
      createCustom();
      drawNoLines(input);
  }
      dropDown.style.display = 'none';
  });
});
  pen.forEach((pen) => { 
  pen.addEventListener('click', () => { 
  let penColor = pen.id;
  colorList.style.display = 'none';
    
  const boxes = document.querySelectorAll('.box, .boxNo');
  boxes.forEach((boxes) => {
  boxes.addEventListener('mouseover', () => { 
  boxes.style.backgroundColor = penColor;
  
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