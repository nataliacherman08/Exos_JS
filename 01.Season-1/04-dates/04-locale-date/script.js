
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    const dateOfTheDay = new Date();

    let currentDate = new Intl.DateTimeFormat("en-GB", {
        weekday: "long",
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(dateOfTheDay);

    document.getElementById("target").innerHTML = currentDate;

})();