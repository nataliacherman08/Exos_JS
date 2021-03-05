//1) It selects elements starting with A
let selectElementsStartingWithA = (array) => {
    let arr = [];
    array.forEach(e => {
        if (e.startsWith("a")) {
            arr.push(e);
        }
    });
    return arr;
}


//2) It selects elements starting with a vowel
let selectElementsStartingWithVowel = (array) => {
    /*let vowels = "aeiou"; //Declare vowels
    let arr = [];
    array.forEach(e => {
        //Check if elements from "array" start with vowel from "vowels"
        for (let i = 0; i < vowels.length; i++) {
            if (e[0] == vowels[i]) {
                arr.push(e);
            }
        }
    });
    return arr;*/

    let vowel = array.filter(str => /^[aeiou]/i.test(str));
    return vowel;
}


//3) It removes null values from an array
let removeNullElements = (array) => {
    /*let filtered = array.filter((e) => {
        return e != null;
    });
    return filtered;*/

    let filtered = array.filter(e => e != null);
    return filtered;
}


//4) It removes null and false values from an array
let removeNullAndFalseElements = (array) => {
    /*return array.filter((e) => {
        //Return only elements that are equal to 0 or the element itself
        return e === 0 || e;
    });*/

    return array.filter(e => e === 0 || e);
}


//5) It reverses the letters of each element in an array
let reverseWordsInArray = (array) => {
    let arr = [];
    array.forEach(e => {
        arr.push(
            e.split("")//We split elements
                .reverse()//We reverse elements
                .join(""));//And rejoin elements
    });
    return arr;
}


//6) It makes every possible pairing of students
let everyPossiblePair = (array) => {
    /*let results = [];
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            results.push(array[i] + ' ' + array[j]);
        }
    }
    console.log(results);*/
}


//7) It takes all elements except the first 3
let allElementsExceptFirstThree = (array) => {
    /*array.shift();
    array.shift();
    array.shift();
    return array;*/

    array.splice(0, 3);//splice(index, numberOfElements)
    return array;
}



//8) It adds an element to the beginning of an array
let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return array;
}


//9) It sorts an array by the last letter of each word
let sortByLastLetter = (array) => {
    return array.sort(
        (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
    );
}


//10) It gets the first half of a string
let getFirstHalf = (string) => {
    //.substr(début[, longueur])
    //The substr() method returns a portion of the string, starting at the 
    //specified index and extending for a given number of characters afterwards.
    return string.substr(0, Math.round(string.length / 2));
}


//11) It makes numbers negative
let makeNegative = (number) => {
    return -Math.abs(number);
}


//12) It counts elements in an array that are palindromes
let numberOfPalindromes = (array) => {
    let numberOfPalindromes = 0;
    array.forEach(e => {
        if (e.split("").reverse().join("") == e) {
            numberOfPalindromes += 1;
        }
    });
    return numberOfPalindromes;
}


//13) It returns the shortest word in an array
let shortestWord = (array) => {
    /*let testString = "tttttttttttttttttttttt";
    for (let i = 0; i < array.length; i++) {
        if (array[i].length < testString.length)
            testString = array[i];
    }
    return testString;*/

    /*let short = array.reduce((a, b) => {
        return a.length <= b.length ? a : b;
    })
    return short;*/

    return array.reduce((a, b) => a.length <= b.length ? a : b);
}


//14) It returns the longest word in an array
let longestWord = (array) => {
    /*let testString = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > testString.length)
            testString = array[i];
    }
    return testString;*/

    return array.reduce((a, b) => a.length >= b.length ? a : b);
}


//15) It sums up the numbers in an array
let sumNumbers = (array) => {
    return array.reduce((a, b) => a + b);
}


//16) It repeats the elements of an array
let repeatElements = (array) => {
    array.forEach(e => {
        array.push(e);
    });
    return array;
}


//17) It turns a number string into a number
let stringToNumber = (string) => {
    return parseInt(string);
}


//18) It calculates the average of an array of numbers
let calculateAverage = (array) => {
    return array.reduce((a, b) => a + b) / array.length;
}


//19) It gets elements until greater than five
let getElementsUntilGreaterThanFive = (array) => {
    let arr = [];
    /*for (let i = 0; i <= 5; i++) {
        arr.push(array[i]);
    };*/
    arr = array.splice(0, 6);
    return arr;
}


//20) It converts an array to an object
let convertArrayToObject = (array) => {
    let arr = [];
    for (let i = 0; i < array.length; i += 2) {
        arr.push([array[i], array[i + 1]]);
    };
    let object = Object.fromEntries(arr);
    return object;
}


//21) It gets all letters in an array of words
let getAllLetters = (array) => {
    //It transforms array in string
    let string = array.join("");
    console.log(string);
    //It transforms the string in an array with letters
    let arrayOfLetters = string.split("").map(x => x).sort();
    console.log(arrayOfLetters);
    //It deletes doubles of letters
    let deleteDouble = [...new Set(arrayOfLetters)];
    console.log(deleteDouble)
    return deleteDouble;
}


//22) It swaps keys and values in an object
let swapKeysAndValues = (object) => {
}


//23) It adds together keys and values
let sumKeysAndValues = (object) => {
}


//24) It removes capital letters from a string
let removeCapitals = (string) => {
    let lowercaseString = string.replace(/[A-Z]/g, "");
    return lowercaseString;
}


//25) It rounds up a number
let roundUp = (number) => {
    return Math.ceil(number);
}


//26) It formats a date nicely
let formatDateNicely = (date) => {
    let niceFormatDate = date.toLocaleString(/*"fr-Fr"*/"en-GB", {
        month: "numeric",
        day: "numeric",
        year: "numeric",
    });
    console.log(niceFormatDate);
    return niceFormatDate;

    /*let event = new Date('2015-03-04');
    console.log(event);
    return (event.toLocaleString('fr-FR'));*/
}


//27 Gets the domain name from an email address
let getDomainName = (string) => {
    return 'Write your method here';
}


//28) It titleizes a string
let titleize = (string) => {
}


//29) It checks a string for special characters
let checkForSpecialCharacters = (string) => {
    let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return format.test(string);
}


//30) It finds the square root of a number
let squareRoot = (number) => {
    return Math.sqrt(number);
}


//31) It finds the factorial of a number
let factorial = (number) => {
    /*let f = 1;
    for (let i = 1; i <= number; i++) {
        f = f * i
    }
    return f;*/
    return (number != 1) ? number * factorial(number - 1) : 1;
}


//32) It finds all possible anagrams of a word
let findAnagrams = (string) => {

}

//33) It converts Fahrenheit to Celsius rounding to the nearest integer
let convertToCelsius = (number) => {
    return Math.round((number - 32) * 5 / 9);

    /*const celsiusToFahrenheit = celsius => celsius * 9 / 5 + 32;
    const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5 / 9;*/
}

//34) It changes each letter of an array into its position in the alphabet
let letterPosition = (array) => {
    return array.map((e) => e.toUpperCase().charCodeAt(0) - 64);
}