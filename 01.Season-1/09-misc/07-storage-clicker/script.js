// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    let target = document.getElementById('target');
    let visitCount = localStorage.getItem('counter');

    document.getElementById('increment').addEventListener('click', () => {
        visitCount++;
        localStorage.setItem('counter', visitCount);
        target.innerHTML = `Number of click : ${visitCount}`;

    });

    //With w3school:
    /*function counter() {
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
    });*/

})();
