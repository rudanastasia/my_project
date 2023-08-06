const string = "Привет! Как дела?";

const vowels = ["и", "е", "а", "е", "а"]

const getVowels = stringToFilter => {
    let extractedVowels = "";

    for (let i = 0; i < stringToFilter.length; i++) {
        const currentLetter = stringToFilter[i].toLowerCase();

        if (vowels.includes(currentLetter)) {
            extractedVowels += currentLetter;
        }

        

    }

    return extractedVowels

}

console.log(getVowels(string)) 

//////
const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}
];

const getWorthyWorkers = workersArr => {
    const WorthyWorkers = [];

    workersArr.forEach(currentWorker => {
        if (currentWorker.salary > 1000) {
            WorthyWorkers.push(currentWorker.name)
        }
    })

    return WorthyWorkers;
}

console.log(getWorthyWorkers(workers));
