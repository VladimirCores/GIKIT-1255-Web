const domOutput = document.getElementById('output');
const domInput = document.getElementById('input');
const domButton = document.getElementById('enter');

domButton.onclick = function(event) {
  console.log('domButton -> onclick: 0) - check input is not empty');
  if (domInput.value.length > 0) {
    console.log('domButton -> onclick: 1) - add todo');
    domOutput.innerHTML += `<div>${domInput.value}</div>`;
    console.log('domButton -> onclick: 2) - clear input');
    domInput.value = '';
  } else {
    domInput.style.borderColor = "red"
    // alert('Wrong input');
  }
}