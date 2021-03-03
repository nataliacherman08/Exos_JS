//-----------------------Examples----------------------------------------------

let tailleString = (texte) => {
    return texte.length;
}

let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text = texte.substr(" ", a) + " " + texte.substr(a + 1, texte.length);
    return text;
}


//------------------------Exercices------------------------------------------------------------------------------

//Concat text
let concatString = (texte1, texte2) => {
    let finalText = texte1 + texte2;
    return finalText;
}

//Display Strings
let afficherCar5 = (texte) => {
    let car5 = texte[4];
    return car5;
}

let afficher9Car = (texte) => {
    let car9 = texte.substr(0, 9);
    return car9;
}

//UpperCase
let majusculeString = (texte) => {
    return texte.toUpperCase();
}

//LowerCase
let minusculeString = (texte) => {
    return texte.toLowerCase();
}

//Delete space
let SupprEspaceString = (texte) => {
    return texte.trim();
}

//Check the type
let IsString = (texte) => {
    return typeof texte === "string" ? true : false;
}

let AfficherExtensionString = (texte) => {
    let lastindexof = texte.lastIndexOf('.');
    return texte.substr(lastindexof + 1);
}

let NombreEspaceString = (texte) => {
    return texte.split(" ").length - 1;
}

let InverseString = (texte) => {
    return texte.split("").reverse().join("");
}

/*
-------------------------------------- Exercices sur les nombres et les caluls mathématiques ------------------------------------------------------*/

let calculPuissance = (x, y) => {
    return Math.pow(x, y);
}

//Calculate the absolute value
let valeurAbsolue = (nombre) => {
    return Math.abs(nombre);
}


let valeurAbsolueArray = (array) => {
    let arr = [];
    array.forEach(e => {
        arr.push(Math.abs(e));
    });
    return arr;
}

//Calculate the surface of a Circle
let sufaceCercle = (rayon) => {
    return Math.round(Math.PI * Math.pow(rayon, 2));
}

//Calculate the hypothenuse
let hypothenuse = (ab, ac) => {
    return Math.sqrt(Math.pow(ab, 2) + Math.pow(ac, 2));
}

//Calculate the IMC
let calculIMC = (poids, taille) => {
    return parseFloat((poids / Math.pow(taille, 2)).toFixed(2));
}