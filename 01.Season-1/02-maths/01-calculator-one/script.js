
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        let a = parseInt(document.getElementById("op-one").value);
        let b = parseInt(document.getElementById("op-two").value);
        let result = a + b;
        alert(result);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        let a = parseInt(document.getElementById("op-one").value);
        let b = parseInt(document.getElementById("op-two").value);
        let result = a - b;
        alert(result);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        let a = parseInt(document.getElementById("op-one").value);
        let b = parseInt(document.getElementById("op-two").value);
        let result = a * b;
        alert(result);
    });

    document.getElementById("division").addEventListener("click", function() {
        let a = parseInt(document.getElementById("op-one").value);
        let b = parseInt(document.getElementById("op-two").value);
        let result = a / b;
        alert(result);
    });
})();