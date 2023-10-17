const textInput = document.querySelector('#name-input');

const textOutput = document.querySelector('#name-output');

const inputHandle = event => {
    event.preventDefault();
    textOutput.textContent = event.currentTarget.value;
    if (!textInput.value) {
        textOutput.textContent = "Anonymous";
    }
}

textInput.addEventListener('input', inputHandle);