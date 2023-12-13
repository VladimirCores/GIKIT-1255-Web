const domOutput = document.getElementById('output');
const domInput = document.getElementById('input');
const domButton = document.getElementById('enter');

let numberOfTodos = 0;

// LISTENERS METHODS
const onCreateTodoButtonClick = function(event) {
  console.log('domButton -> onclick: 0) - check input is not empty');

  if (checkInputWithText()) {
    numberOfTodos += 1;
    renderInputTextInOutput();
  }
  else renderAlert('Wrong input');
}
const onInputTextInput = function() {
  renderInputHighlightColor("");
}
const onTodoDeleteClick = function(event) {
  console.log('todoDelete -> onTodoDeleteClick', event);
  event.currentTarget.parentNode.remove();
}
// LISTENERS ENDs

// LOGICAL METHODS
const checkInputWithText = () => domInput.value.length > 0 && isNaN(domInput.value);
// LOGICAL ENDs

// RENDER METHODS
const renderAlert = function(message) {
  renderInputHighlightColor("red");
  alert(message);
}
const renderInputTextInOutput = function() {
  console.log('domButton -> onclick: 1) - add todo');

  const domTodoContainer = document.createElement('div');

  const domTodoButtonDelete = createActionButtonWithText('delete');
  domTodoButtonDelete.onclick = onTodoDeleteClick;

  domTodoContainer.innerText = `${numberOfTodos}. ${domInput.value}`;

  domTodoContainer.appendChild(domTodoButtonDelete);
  domOutput.appendChild(domTodoContainer);
  
  console.log('domButton -> onclick: 2) - clear input');
  domInput.value = '';
}
const renderInputHighlightColor = (color) => domInput.style.backgroundColor = color;
// RENDER ENDs

// UTILS Methods
const createActionButtonWithText = (text) => {
  const btn = document.createElement('button');
  btn.innerText = text;
  btn.style.backgroundColor = 'red';
  btn.style.marginLeft = '12px';
  btn.style.border = 'solid 2px';
  btn.style.borderColor = 'green';
  return btn;
}
// UTILS ENDs

domButton.onclick = onCreateTodoButtonClick;
domInput.oninput = onInputTextInput;

domInput.value = "Test";
numberOfTodos = 1;
renderInputTextInOutput();