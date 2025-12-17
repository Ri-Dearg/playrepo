// Declaring variables
const doesNotChange = 'Const means the value remains the same.';
let canChange = 'let mean the value can change.';

// Common Data Types
let number1 = 10;
let number2 = 10.5;
let string1 = 'This is a string';
let boolean1 = true;
let boolean2 = false;

/* A series of values accessed with an index,
best when the values have the same type/structure */
let array1 = [1, 2, 3, 4, 5];

/* A collection of key-value pairs accessed via the dot notation and key name,
useful when the values are varied */
let object1 = { key1: 'value1', key2: 2, key3: [2, 3, 4] };

// getElementById returns a single element
const placeholderButton = document.getElementById('placeholder');
// getElementsByClassName returns an array of elements
const cards = document.getElementsByClassName('card-text');

// View the value of a variable
console.log(placeholderButton);

// View the properties of a variable, they can be accessed.
console.dir(placeholderButton);

// Change element text.
function changeInnerText() {
    // Returns true if placeholderButton has a value.
    if (placeholderButton) {
        placeholderButton.innerText = 'New Text True';
    } else {
        console.log('Element does not exist.');
    }
}

// Using parameters allows us to change values used in functions
function changeElementsInnerText(elementArray, newText) {
    /* loop through the array. 
  i begins at zero
  loop will run as long as the number is smaller than the array length
  i will increase at the end of each loop */
    for (i = 0; i < elementArray.length; i++) {
        console.log(elementArray[i]);
        elementArray[i].innerText = `${newText}`;
    }
}

console.dir(cards);

// Alternative methods to loop through arrays
for (let card of cards) {
    console.log(card);
}

Array.from(cards).forEach((element) => {
    console.log(element);
});

// call a function on a click
placeholderButton.addEventListener('click', changeInnerText);

// Write an anonymous arrow function for on-the-fly code
placeholderButton.addEventListener('click', () => {
    placeholderButton.classList.add('secondary-color');
});

// But it is better to add one click event like this:
placeholderButton.addEventListener('click', () => {
    changeInnerText();
    placeholderButton.classList.add('secondary-color');
});

// Pause JS at this line
debugger;

// Call the function using parameters
changeElementsInnerText(cards, 'Text has changed');
