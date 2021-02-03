// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    document.getElementById('run').addEventListener('click', () => {
        const Nat = { firstName: 'Nat', lastName: 'Cherman', age: '25', city: 'Mons', country: 'Belgium' };
        console.log(Nat);
    })
})();
