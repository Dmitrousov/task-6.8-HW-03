const inputField = document.querySelector('inputField');
const duplicateField = document.querySelector('duplicateField');
const submitButton = document.querySelector('submitButton');

inputField.addEventListener('input', functiion() = {
    duplicateField.textContent = inputField.value
} )

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    const inputValue = inputField.value;
    console.log('');
    inputField.value = '';
});