
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {
        //The square numbers between 1 and 21
        //So we start our square calculation at 1
        let n = 1;

        //Results of this operation
        let results = [];

        //Perform the calculation as long as it is less than 21
        while ((n * n) < 21) { //If we put just "n" it won't be between 1 and 21
            let operation = n * n;
            n += 1;
            results += `${operation}  `;
        }

        alert(results);
    });

})();
