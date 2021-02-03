// 07-classes/01-instances/script.js - 7.1: instances


(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    document.getElementById('run').addEventListener('click', () => {
        console.log(new Cat("Skitty", "9 years"));
        console.log(new Cat("Pixel", "6 years"));
    });

})();
