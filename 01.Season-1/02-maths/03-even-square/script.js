
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

        let x = 1;
        let numbers = "";
        
        while ((x * x) < 21) {
        let square = x * x;
        x += 1;
        
        numbers = numbers + " , " + square;
        }
        
        alert(numbers.substring(2));

    });

})();
