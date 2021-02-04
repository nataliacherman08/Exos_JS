// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    //Doesn't work, I will be back. -Terminator
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        get name() {
            return `Hello ${this.firstname} ${this.lastname}!`;
        }

        set name() {
            this.firstname = Jarl;
            this.lastname = Balgruuf;
        }
    }

    document.getElementById('run').addEventListener('click', () => {
        console.log(name());
    });

})();
