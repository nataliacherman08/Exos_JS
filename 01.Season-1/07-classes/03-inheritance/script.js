// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

    class Cat extends Animal {
        constructor(name) {
            super();
            this.name = name;
        }
        static greeting = 'Miaouw';
    }

    class Dog extends Animal {
        constructor(name) {
            super();
            this.name = name;
        }
        static greeting = "Woof";
    }

    document.getElementById('run').addEventListener('click', () => {
        let nameCat = new Cat('Bowie');
        let nameDog = new Dog('Bonnie');
        console.log(nameCat.sayHello());
        console.log(nameDog.sayHello());
    });

})();
