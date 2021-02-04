// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector


(() => {

    let own = document.getElementsByClassName('target');

    for (i = 0; i < own.length; i++) {
        own[i].innerHTML = 'owned.';
    }

})();
