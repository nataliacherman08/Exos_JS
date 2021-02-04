// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

    document.getElementById('run').addEventListener('click', () => {

        let passwordOne = document.getElementById('pass-one');
        let passwordTwo = document.getElementById('pass-two');

        if (passwordOne.value !== passwordTwo.value) {
            passwordOne.setAttribute('style', 'border-color:red');
            passwordTwo.setAttribute('style', 'border-color:red');
        }
    });

})();
