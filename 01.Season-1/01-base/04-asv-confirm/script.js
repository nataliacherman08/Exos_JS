
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');



    //1) Questions to the user
    let age = prompt("How old are you?");
    let gender = prompt("What's your gender?");
    let town = prompt("Where do you live?");

    //2) Display the collected responses in a dialog box
    alert(`You are ${age}. You are a ${gender}. And you live in ${town}.`)

    //3) Ask the user to confirm
    let confirmation = prompt("Is this really you?");

    //4)Conditions
    if ((confirmation == "no") || (confirmation == "no, it's not")) {
        //5) Re-run the process
        let age = prompt("How old are you?");
        let gender = prompt("What's your gender?");
        let town = prompt("Where do you live?");
    }

})();
