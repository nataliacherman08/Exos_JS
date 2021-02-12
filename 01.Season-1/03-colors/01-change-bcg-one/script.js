
// 03-colors/01-change-bcg-one/script.js - 3.1: Bcg one (1)


(() => {

    //Red color background
    document.getElementById("red").onclick = redBackground;

    function redBackground() {
        document.body.style.backgroundColor = "#bb010b";
    }


    //Green color background
    document.getElementById("green").onclick = greenBackground;

    function greenBackground() {
        document.body.style.backgroundColor = "#02a570";
    }


    //Yellow color background
    document.getElementById("yellow").onclick = yellowBackground;

    function yellowBackground() {
        document.body.style.backgroundColor = "#f1c500";
    }


    //Blue color background
    document.getElementById("blue").onclick = blueBackground;

    function blueBackground() {
        document.body.style.backgroundColor = "#47c3e3";
    }


})();