// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    function counter() {
        if (typeof (Storage) !== 'undefined') {
            if (localStorage.clickcount) {
                localStorage.clickcount = Number(localStorage.clickcount) + 1;
            } else {
                localStorage.clickcount = 1;
            }
            document.querySelector('.counter').innerText = 'You have clicked on the button ' + localStorage.clickcount + ' time(s)';
        } else {
            document.querySelector('.counter').innerText = 'Sorry, something went wrong.';
        }
    }

    document.getElementById('increment').addEventListener('click', () => {
        counter()
    });

})();
