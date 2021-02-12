
// 01-base/02-var-prompt/script.js - 1.2: var & prompt

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    //1) Ask the name of the user
    let name = prompt("What's your name?");
    //2) Display it in a dialog box with a welcome message
    alert(`Hello ${name} !`);
})();