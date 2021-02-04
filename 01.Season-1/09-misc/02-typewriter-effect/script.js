// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    //Speed
    let speed = 150;
    let i = 0;

    //Retrieve and hide the text from HTML
    let text = document.getElementById('target').textContent;
    let target = document.getElementById('target');
    target.innerHTML = '';

    //Type Writer Effect
    function typeWriter() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        };
    };

    //Activate the function
    typeWriter();

})();
