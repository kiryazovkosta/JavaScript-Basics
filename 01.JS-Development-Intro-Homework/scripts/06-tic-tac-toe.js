function loadGameArea() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        var context = canvas.getContext("2d");

        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(0, 315);
        context.lineWidth = 6;

        context.moveTo(100, 0);
        context.lineTo(100, 315);
        context.lineWidth = 3;

        context.moveTo(200, 0);
        context.lineTo(200, 315);
        context.lineWidth = 3;

        // set line color
        context.strokeStyle = '#000000';
        context.stroke();
    }
}

function play() {

}