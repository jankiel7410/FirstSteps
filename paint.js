//ofc, że z jakiegoś tutoriala
function init() {
    var canvas = document.getElementById("canvas");//pobierz element
    if (canvas == undefined) alert('coś poszło mocno nie tak :c');
    var ctx = canvas.getContext('2d');//coś jak obiekt Graphics w javie

    var mouse = { x: 0, y: 0 };//obiekt przechowujacy pozycje kursora


    canvas.addEventListener('mousemove', function (e) {
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
    }, false);

   
    //<ustawienie details="kolor, kształt pędzla">
    ctx.lineWidth = 3;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';
    //</ustawienie> :)

    //jak przy onMouseDragged czy coś w tym guście
    canvas.addEventListener('mousedown', function (e) {
        ctx.beginPath();//początek krzywej
        ctx.moveTo(mouse.x, mouse.y);//ustaw "pisak" w pozycji kursora

        canvas.addEventListener('mousemove', onPaint, false);
    }, false);//rysowanie

    canvas.addEventListener('mouseup', function () {
        canvas.removeEventListener('mousemove', onPaint, false);
    }, false);//a to jest po to, żeby przestał rysować po puszczeniu LPM

    var onPaint = function () {
        ctx.lineTo(mouse.x, mouse.y);//ustaw koniec linii
        ctx.stroke();//tu jest dopiero właściwe rysowanie
    };

}