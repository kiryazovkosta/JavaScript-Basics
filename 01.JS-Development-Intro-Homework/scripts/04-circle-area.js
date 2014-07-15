function calcCircleArea(r) {
    var area = Math.PI * r * r;
    return area;
}

function calculateAreas() {
    var text7 = document.getElementById('a7');
    text7.innerHTML += calcCircleArea(7);
    var text1_5 = document.getElementById('a1-5');
    text1_5.innerHTML += calcCircleArea(1.5);
    var text20 = document.getElementById('a20');
    text20.innerHTML += calcCircleArea(20);
}