// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        { name: "mouette", fem: true },
        { name: "corbeau" },
        { name: "mésange", fem: true },
        { name: "hibou" },
        { name: "buse", fem: true },
        { name: "pigeon" },
        { name: "pie", fem: true },
        { name: "vautour" },
        { name: "faucon" },
        { name: "rouge-gorge" },
        { name: "tourterelle", fem: true },
        { name: "corneille", fem: true },
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    document.getElementById('run').addEventListener('click', () => {
        let randomBird = birds[Math.floor(Math.random() * birds.length)];
        console.log(randomBird);

        //It doesn't work with a Set so I create a new array and take the elements from the Set 'adjectives'
        let adjectivesArray = Array.from(adjectives);
        let randomAdjective = adjectivesArray[Math.floor(Math.random() * adjectivesArray.length)];
        console.log(randomAdjective);

        if (randomBird.fem === true) {
            document.getElementById('target').innerHTML = (randomBird.name + " " + randomAdjective + "e");
        } else {
            document.getElementById('target').innerHTML = (randomBird.name + " " + randomAdjective);
        }
    });

})();
