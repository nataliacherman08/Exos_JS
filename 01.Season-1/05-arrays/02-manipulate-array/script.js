// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    document.getElementById("run").addEventListener("click", () => {

        fruits.pop(); //Delete the last element of the array
        fruits.shift(); //Delete the first element of the array
        fruits.unshift("banana"); //Add an element at the start of the array
        fruits.push("kiwi"); //Add an element at the end of the array

        console.log(fruits);
    });


})();
