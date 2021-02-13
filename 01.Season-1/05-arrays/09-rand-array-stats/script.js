// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    document.getElementById("run").addEventListener("click", () => {

        //1) Display the ten elements of an array of 10 numbers (between 1 and 100) in the table
        let arrayOfTenNumbers = [];

        for (let i = 1; i < 11; i++) {
            arrayOfTenNumbers.push(Math.floor(Math.random() * 100));
            document.getElementById("n-" + i).innerHTML = arrayOfTenNumbers[arrayOfTenNumbers.length - 1];
        }

    });

})();
