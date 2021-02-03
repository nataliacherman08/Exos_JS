// 05-arrays/12-manipulate-set/script.js - 5.12: manipulation of a Set


(() => {
    const fruits = new Set([
        "apple",
        "pear",
        "strawberry",
        "tomato",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grape",
        "cherry",
    ]);

    document.getElementById('run').addEventListener('click', () => {
        //Delete from Set
        fruits.delete('apple');
        fruits.delete('cherry');

        //Implement Set
        fruits.add('banana');
        fruits.add('kiwi');

        console.log(fruits);
    });
})();
