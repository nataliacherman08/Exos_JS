
// 01-base/03-prompt-if/script.js - 1.3: promp & if

(() => {
  // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
  console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
  console.log('Hello Woods programmer');

  //1) Ask the user if he want some cake
  let proposal = prompt("Do you want some cake?");
  //2) Setting up the conditions
  if ((proposal == "yes") || (proposal == "yes, of course")) {
    alert("Congratulations!");
  } else {
    alert("More cake for me then :p !");
  }
})();