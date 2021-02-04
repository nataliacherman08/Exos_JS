// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel


(() => {

    let gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];


    //Target the element in HTML:
    let image = document.querySelector('img');

    //Assign a starting image in the array so [0]Bell
    let initialImage = 0;

    //Create an event when click on the 'next' btn
    document.getElementById('next').addEventListener('click', () => {

        //Change the source of the image located in HTML by the array
        //And begin by the first element of the array
        image.src = gallery[initialImage];
        initialImage++;

        if (initialImage === gallery.length) {
            gallery.forEach(element => {
                initialImage = 0;
            });
        }
    });

})();
