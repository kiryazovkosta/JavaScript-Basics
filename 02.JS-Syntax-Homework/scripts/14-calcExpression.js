function calc() {
    var expression = document.getElementById('expression').value;
    var result = document.getElementById('result').innerText = eval(expression);
}