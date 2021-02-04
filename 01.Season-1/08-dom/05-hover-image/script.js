// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

    //1) Target the concerned element :
    let image = document.querySelector('img');

    //2) Then, retrieve the basic image : 
    /*let kissSrc = document.querySelector('img');
    let kiss = kissSrc.getAttribute('src');*/
    let kiss = document.querySelector('img').getAttribute('src');

    //3) Same, retrieve the hover:image : 
    /*let winkHeartSrc = document.querySelector('img');
    let winkHeart = winkHeartSrc.getAttribute('data-hover');*/
    let winkHeart = document.querySelector('img').getAttribute('data-hover');

    //Now, we have all  the elements for create the hover:effect !

    //4) Add an EventListener to the basic image so it becomes the hover:image 
    //(When the mouse is over the image): We put the hover:image as a src.
    document.querySelector('img').addEventListener('mouseover', () => {
        image.src = winkHeart;
    });

    //If we leave the code lines in that state, we will stay on the hover:image.
    //So, we have to go back to the basic image

    //5) Add an EventListener to the hover:image 
    //(When the mouse is out): We put back the basic image as a src.
    document.querySelector('img').addEventListener('mouseout', () => {
        image.src = kiss;
    });

})();
