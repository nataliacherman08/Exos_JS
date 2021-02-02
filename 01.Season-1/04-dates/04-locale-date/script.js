
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    let date = new Date();

    //MONTH-----------------------------------------------------------
    const months = ['January','February','March','April',
                    'May','June','July','August',
                    'September','October','November','December'];
    const monthsIndex = date.getMonth();
    const month = months[monthsIndex];

    //the day of the week----------------------------------------------
    const days = ['Sunday','Monday','Tuesday','Wednesday',
                'Thursday','Friday','Saterday'];
    const day = days[date.getDay()];

    //YEAR--------------------------------------------------------------
    let year = date.getFullYear();

    //the day of the month----------------------------------------------
    let n = date.getDate();
                
    //HOUR--------------------------------------------------------------
    let hour = date.getHours();
    //Minutes-----------------------------------------------------------
    let minute = date.getMinutes();

    //Complete textual date
    const dateOfToday = day + ' ' + n + ' ' + month + ' ' + year + ', ' + hour + 'h' + minute;

    document.getElementById("target").innerHTML = dateOfToday;

})();
