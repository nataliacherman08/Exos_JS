
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        let a = parseInt(document.getElementById("op-one").value);
        let b = parseInt(document.getElementById("op-two").value);
        switch (operation) {
            case 'addition':
                let resultAddition = a + b;
                alert(resultAddition);
            break;
            case 'substraction':
                let resultSubstraction = a - b;
                alert(resultSubstraction);
            break;
            case 'multiplication':
                let resultMultiplication = a * b;
                alert(resultMultiplication);
            break;
            case 'division':
                let resultDivision = a / b;
                alert(resultDivision);
            break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
