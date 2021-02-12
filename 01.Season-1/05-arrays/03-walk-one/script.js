// 05-arrays/01-get-element/script.js - 5.1: walk through the list


(() => {

    let fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];

    document.getElementById('run').addEventListener('click', () => {

        for (fruit of fruits) {
            console.log(fruit);
        }

        //Second way
        /*for (i in fruits) {
            console.log(fruits[i]);
        }
        
        //Third way
        /*for (let i = 0; i < fruits.length; i++) {
            console.log(fruits[i]);
        }*/

    });
})();
