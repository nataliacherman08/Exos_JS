
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {


    document.getElementById("run").addEventListener("click", () => {

        let dayOfBirth = document.getElementById("dob-day").value;
        let monthOfBirth = document.getElementById("dob-month").value;
        let yearOfBirth = document.getElementById("dob-year").value;

        //1) Get the birthdate of the visitor
        dateBirth = `${dayOfBirth} / ${monthOfBirth} / ${yearOfBirth}`;
        alert(dateBirth);
    });

})();
