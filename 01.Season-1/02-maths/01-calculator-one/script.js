
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    //1) Addition
    //parseInt (ensures that the value entered by the user is a number)
    //.value (transforms the input into a usable value for the operation)
    document.getElementById("addition").addEventListener("click", () => {
        let a = parseInt(document.getElementById("op-one").value);
        let b = parseInt(document.getElementById("op-two").value);

        let sum = a + b;
        alert(sum);
    });

    //2) Substraction
    document.getElementById("substraction").addEventListener("click", () => {
        let a = parseInt(document.getElementById("op-one").value);
        let b = parseInt(document.getElementById("op-two").value);

        let substraction = a - b;
        alert(substraction);
    });

    //3) Multipication
    document.getElementById("multiplication").addEventListener("click", () => {
        let a = parseInt(document.getElementById("op-one").value);
        let b = parseInt(document.getElementById("op-two").value);

        let multiplication = a * b;
        alert(multiplication);
    });

    //4) Division
    document.getElementById("division").addEventListener("click", () => {
        let a = parseInt(document.getElementById("op-one").value);
        let b = parseInt(document.getElementById("op-two").value);

        let division = a / b;
        alert(division);
    });

})();