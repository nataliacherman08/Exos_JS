
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    let time = new Date();

    let hour = time.getHours();
    let minutes = time.getMinutes();

    if (hour <= 17) {
        if (minutes <= 30) {
            document.getElementById("target").innerHTML = "Hello";
        }
    } else {
        document.getElementById("target").innerHTML = "Good evening";
    }

})();
