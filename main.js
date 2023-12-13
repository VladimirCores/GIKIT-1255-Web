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
const onTodoDeleteClick = function() {
  console.log('todoDelete -> onTodoDeleteClick');
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
  domOutput.innerHTML += `
    <div>
      ${numberOfTodos}. ${domInput.value} 
      <button style="background-color:red;" onclick="onTodoDeleteClick">x</button>
    </div>
  `;
  console.log('domButton -> onclick: 2) - clear input');
  domInput.value = '';
}
const renderInputHighlightColor = (color) => domInput.style.backgroundColor = color;
// RENDER ENDs

domButton.onclick = onCreateTodoButtonClick;
domInput.oninput = onInputTextInput;