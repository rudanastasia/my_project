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
