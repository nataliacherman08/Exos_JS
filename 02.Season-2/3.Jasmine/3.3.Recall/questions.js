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


//It makes every possible pairing of students
let everyPossiblePair = (array) => {
    /*let results = [];
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            results.push(array[i] + ' ' + array[j]);
        }
    }
    console.log(results);*/
}


//It takes all elements except the first 3
let allElementsExceptFirstThree = (array) => {
    array.splice(0, 3);
    return array;
}


//It adds an element to the beginning of an array
let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return array;
}


//It sorts an array by the last letter of each word
let sortByLastLetter = (array) => {
    return array.sort(
        (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
    );
}


//It gets the first half of a string
let getFirstHalf = (string) => {
    return string.substr(0, Math.round(string.length / 2));
}


//It makes numbers negative
let makeNegative = (number) => {
    return -Math.abs(number);
}

//It counts elements in an array that are palindromes
let numberOfPalindromes = (array) => {
}


//It returns the shortest word in an array
let shortestWord = (array) => {
    let teststring = "tttttttttttttttttttttt";
    for (let i = 0; i < array.length; i++) {
        if (array[i].length < teststring.length)
            teststring = array[i]
    }
    return teststring;
}


//It returns the longest word in an array
let longestWord = (array) => {
}


//It sums up the numbers in an array
let sumNumbers = (array) => {
    return array.reduce((a, b) => a + b);
}


//It repeats the elements of an array
let repeatElements = (array) => {
}


//It turns a number string into a number
let stringToNumber = (string) => {
    return parseInt(string);
}


//It calculates the average of an array of numbers
let calculateAverage = (array) => {
    return array.reduce((a, b) => a + b) / array.length;
}


//It gets elements until greater than five
let getElementsUntilGreaterThanFive = (array) => {
    arr = []
    for (let i = 0; i <= 5; i++) {
        arr.push(array[i]);
    }
    return arr;
}


//It converts an array to an object
let convertArrayToObject = (array) => {
}


//It gets all letters in an array of words
let getAllLetters = (array) => {
}

let swapKeysAndValues = (object) => {
    return 'Write your method here';
}

let sumKeysAndValues = (object) => {
    return 'Write your method here';
}


//It removes capital letters from a string
let removeCapitals = (string) => {
    let lowercaseString = string.replace(/[A-Z]/g, '');
    return lowercaseString;
}


//It rounds up a number
let roundUp = (number) => {
    return Math.ceil(number);
}


//It formats a date nicely
let formatDateNicely = (date) => {
    let niceFormatDate = date.toLocaleString("fr-Fr", {
        month: "numeric",
        day: "numeric",
        year: "numeric",
    })
    console.log(niceFormatDate);
    return niceFormatDate;
}



let getDomainName = (string) => {
    return 'Write your method here';
}


//It titleizes a string
let titleize = (string) => {
}


//It checks a string for special characters
let checkForSpecialCharacters = (string) => {
    let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return format.test(string);
}


//It finds the square root of a number
let squareRoot = (number) => {
    return Math.sqrt(number);
}


//It finds the factorial of a number
let factorial = (number) => {
    let f = 1;
    for (let i = 1; i <= number; i++) {
        f = f * i
    }
    return f;
}


//It finds all possible anagrams of a word
let findAnagrams = (string) => {

}

//It converts Fahrenheit to Celsius rounding to the nearest integer
let convertToCelsius = (number) => {
    return Math.round((number - 32) * 5 / 9);
}

//It changes each letter of an array into its position in the alphabet
let letterPosition = (array) => {
    return array.map((e) => e.toUpperCase().charCodeAt(0) - 64);
}