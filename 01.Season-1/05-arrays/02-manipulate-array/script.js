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

    document.getElementById('run').addEventListener('click', () => {
        //delete first element
        fruits.shift();

        //delete last element
        fruits.pop();

        //add first element
        fruits.unshift('banana');

        //add last element
        fruits.push('kiwi');

        //SEE THE RESULT
        console.log(fruits);
    })

})();
