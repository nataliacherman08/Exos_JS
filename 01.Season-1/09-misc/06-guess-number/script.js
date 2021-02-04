// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    //Generate a random number
    let x = [Math.floor(Math.random() * 100) + 1];
    //User's input number
    let number = '';
    //User's guesses
    let y = 0;


    //Create a loop as long as the user's input number is false
    while (number !== x) {
        number = parseInt(prompt('Can you guess a number between 1 and 100 ?'));
        y += 1;

        if (number > x) {
            alert("You guessed to high !");
        } else if (number < x) {
            alert("You guessed too low !");
        }
        //If the user finds the random number
        else {
            alert("That's it! As well as you needed " + y + " guesses");
        }

    }

})();
