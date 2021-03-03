//Create an array------------------------------------------------------------
let CreationTableauLangages = () => {
    return ["Html", "CSS", "Java", "PHP"];
}

let CreationTableauNombres = () => {
    return [0, 1, 2, 3, 4, 5];
}


//Replace  .splice(index, numberOfElement, "byWhat")--------------------------
let RemplacementElement = (langages) => {
    langages.splice(2, 1, "Javascript");
    return langages;
}


//Add an element in an array--------------------------------------------------
let AjoutElementLangages = (langages) => {
    langages.push("Ruby", "Python");
    return langages;
}

let AjoutElementNombres = (nombres) => {
    nombres.unshift(-2, -1);
    return nombres;
}


//Delete an element------------------------------------------------------------
let SuppressionPremierElement = (langages) => {
    langages.shift();
    return langages;
}

let SuppressionDernierElement = (langages) => {
    langages.pop();
    return langages;
}


//Convert a string in elements-------------------------------------------------
let ConversionChaineTableau = (reseaux_sociaux_chaine) => {
    return reseaux_sociaux_chaine.split(",");
}

//Convert the elements of an array into a string ------------------------------
let ConversionTableauChaine = (langages) => {
    return langages.join(",");
}

//Sort an array ----------------------------------------------------------------
let TriTableau = (reseaux_sociaux) => {
    return reseaux_sociaux.sort();
}

//Reverse an array ------------------------------------------------------------
let InversionTableau = (langages) => {
    return langages.reverse();
}