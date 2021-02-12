
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value


    // Creation of a function that will perform the operations
    const performOperation = operation => {

        //Define variables as numbers and values (from inputs)
        let a = parseInt(document.getElementById("op-one").value);
        let b = parseInt(document.getElementById("op-two").value);

        //Switch (check the value of a variable against a list of expected values)
        //In this case, it's the operations
        switch (operation) {
            case "addition":
                let sum = a + b;
                alert(sum);
                break;
            case "substraction":
                let substraction = a - b;
                alert(substraction);
                break;
            case "multiplication":
                let multiplication = a * b;
                alert(multiplication);
                break;
            case "division":
                let division = a / b;
                alert(division);
                break;
            //No need for a default
        }

    };

    //An array is created from the elements under the ".operator" class. (from HTML code)
    Array.from(document.querySelectorAll(".operator"))

        //For each of these elements, a name is assigned (here, button) to which an EventListener is added.
        //This EventListener is a click which launches a function which activates the function created above.
        .forEach(button => button.addEventListener("click", () =>
            (performOperation(button.id)) //This function takes in parameters (the ids of all the buttons) *
        )
        );
    //* It's the same as if you made, document.getElementById (4 times for the operators) but summarized
    //When the event occurs, an event object is passed to the function as the first parameter.
    //The type of the event object depends on the specified event.

    //Optional. A Boolean value that specifies whether the event should be executed in the capturing or in the bubbling phase.
    //Possible values:
    //true - The event handler is executed in the capturing phase
    //false- Default. The event handler is executed in the bubbling phase
    //In this case, I didn't add this optional value. (false)
})();
