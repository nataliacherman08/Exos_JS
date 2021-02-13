// 05-arrays/08-array-includes/script.js - 5.8: presence in an aray

(() => {

    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];


    document.getElementById("run").addEventListener("click", () => {

        if (fruits.includes("apple")) {
            console.log("There's apple in the array.")
        } else {
            console.log("There isn't apple in the array.")
        }

    });

})();
