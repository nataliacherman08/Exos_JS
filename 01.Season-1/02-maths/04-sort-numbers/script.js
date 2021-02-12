// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        let numbers = document.getElementById('numbers');
        //Attribuate to this numbers a value so we can sort it
        let valueOfNumbers = numbers.value;

        //Create an array from this numbers with a value
        //The split() method divides a string from a separator
        // to provide an array of sub-strings.
        let arrayOfNumbers = valueOfNumbers.split(' ,');


        //The sort() method sorts the elements of an array, in the same array, and returns the array.
        //By default, sorting is performed on array elements converted into character strings and
        //sorted according to the values of UTF-16 code units of characters.

        //Syntax: arr.sort(fonctionComparaison(a, b))
        //parseInt() is to indicate that the value is a number
        arrayOfNumbers.sort(function (a, b) { return parseInt(a) - parseInt(b) });

        alert(arrayOfNumbers);

    });

})();
