// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set


(() => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    document.getElementById('run').addEventListener('click', () => {
        const nPeople = new Set(people);
        console.log(nPeople.size)
        if (nPeople.has('Alexandre')) {
            console.log('Alexandre is a part of the Set.');
        };
    });

})();
