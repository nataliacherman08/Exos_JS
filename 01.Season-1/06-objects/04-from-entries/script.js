// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];


    // Not sure, will come back
    document.getElementById('run').addEventListener('click', () => {

        const entries = new Map([
            ["name", "species", "age", "gender", "color"], ["Skitty", "cat", "9", "female", "tabby"]
        ]);

        const obj = Object.fromEntries(entries);

        console.log(obj);
        console.log(Object.keys(obj));
        console.log(Object.values(obj));
    });

})();