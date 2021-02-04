// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {

    //Get the data-image by Source Id
    let sourceId = document.getElementById('source');
    let data = sourceId.getAttribute('data-image');

    //Go to the Target Id and replace the src by the data variable
    /*let target = document.getElementById('target');
    target.innerHTML = `<img src=${data} />`;*/
    //2 different ways:
    document.getElementById('target').innerHTML = `<img src=${data} />`;

    //Remove the original element : parent.removeChild(child); (Not sure about this part.)
    //There are also two different ways to do that : child.parentNode.removeChild(child);
    //It would look like that : 'target'.parentNode.removeChild('target'); (But still not sure.)
    'material'.removeChild('target');

})();
