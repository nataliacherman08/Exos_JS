// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)


(() => {

    let password = document.getElementById('pass-one');
    let counterSpan = document.getElementById('counter');

    password.addEventListener('input', () => {

        (password.value.length > 10) &&
            (password.value = password.value.substring(0, password.value.length - 1))

        //If the user adds an element to the password, the counter span add 1
        counterSpan.innerHTML = password.value.length + '/10';


    });

})();
