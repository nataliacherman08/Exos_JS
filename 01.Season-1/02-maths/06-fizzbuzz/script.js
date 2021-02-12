
// 02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz

(() => {

    for (let i = 1; i <= 100; i++) {

        let multipleOfThree = i % 3;
        let multipleOfFive = i % 5;

        //1) First condition : Multiple of 3 or Multiple of 5
        if ((multipleOfThree == 0) || (multipleOfFive == 0)) { //1

            //2) Multiple of 3 and 5
            if ((multipleOfThree == 0) && (multipleOfFive == 0)) { //2
                console.log("fizzbuzz");
            } else {
                //3) Multiple of 3
                if (multipleOfThree == 0) { //3
                    console.log("fizz");
                } else {
                    //4) Multiple of 5
                    console.log("buzz"); //3
                }
            }

            //5) Multiple of none, we write the number
        } else { //1
            console.log(i);
        }
    }

})();
