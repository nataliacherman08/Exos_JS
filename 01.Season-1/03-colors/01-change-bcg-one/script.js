
// 03-colors/01-change-bcg-one/script.js - 3.1: Bcg one (1)


(() => {

    // background color red
    document.getElementById('red').onclick = bgRed;

    function bgRed() {
        document.body.style.backgroundColor = '#bb010b';
    }

    // background color green
    document.getElementById('green').onclick = bgGreen;

    function bgGreen() {
        document.body.style.backgroundColor = '#02a570';
    }

    // background color yellow
    document.getElementById('yellow').onclick = bgYellow;

    function bgYellow() {
        document.body.style.backgroundColor = '#ffdb58';
    }

    // background color blue
    document.getElementById('blue').onclick = bgBlue;

    function bgBlue() {
        document.body.style.backgroundColor = '#005C96';
    }

})();