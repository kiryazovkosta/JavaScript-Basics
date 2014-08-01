function acceptOnlyNumbers() {
    if (isNaN(textbox.value)) {
        textbox.style.background = 'red';
        textbox.disabled = true;
        setTimeout('', 1000);
    } else {
        textField.style.background = '';
        textField.disabled = false;
        textField.focus();
    }
}

var textbox = document.getElementById('numberField');
textbox.addEventListener('input', acceptOnlyNumbers, false);