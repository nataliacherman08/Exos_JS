
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {

    document.getElementById("run").addEventListener("click", () => {

        let inputNumber = parseInt(document.getElementById("number").value);

        function factorial(n) {
            if (isNaN(n)) {
                return "Unknown";
            } else if (n == 0) {
                return 1;
            } else {
                return Math.abs(n) * factorial((Math.abs(n) - 1));
            }
        }

        alert(factorial(inputNumber));
    });

})();
