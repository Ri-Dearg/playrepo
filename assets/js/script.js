const placeholderButton = document.getElementById('placeholder');
const cards = document.getElementsByClassName('card-text');

/* Change element text.
 *
 */
function changeInnerText() {
  if (placeholderButton) {
    placeholderButton.innerText = 'New Text True';
  } else {
    console.log('Element does not exist.');
  }
}

function changeElementsInnerText(elementArray, newText) {
  for (i = 0; i < elementArray.length; i++) {
    console.log(elementArray[i]);
    elementArray[i].innerText = `Lorem Ipsum ${newText}`;
  }
}

placeholderButton.addEventListener('click', changeInnerText);
placeholderButton.addEventListener('click', () => {
  placeholderButton.classList.add('secondary-color');
});

// changeElementsInnerText(cards, 'backtick');

// changeInnerText(placeholderButton);

// debugger;

// const brand = document.getElementById('brand');
// const placeholderButton = document.getElementById('placeholder');

// placeholderButton.addEventListener('click', changeInnerText);
// console.log(placeholderButton);
// changeInnerText(placeholderButton);
// const placeholderButton = document.getElementById('placeholder');
// placeholderButton.addEventListener('click', changeInnerText);
// placeholderButton.onclick = changeInnerText();
// console.dir(placeholderButton);
// const placeholderButton = document.getElementsByClassName('card');
// console.log(placeholderButton);
// console.log(document.getElementById('placeholder'));
