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


////////
const path = "/users/download/index.html"

const isHtml = path => {
    const requiredExt = ".html";
    const pathExt = path.slice(-5);

    return pathExt == requiredExt
}

console.log (isHtml(path));


///////
const mixedArray = [3,13,74,14,66,15,22,4];

const isEven = num => {
    return num % 2 == 0;
}

const filterArray = ( arrayToFilter, filterFn ) => {
    const filteredArray = [];

    arrayToFilter.forEach(num => {
        if (filterFn(num)) {
            filteredArray.push(num);
        }
    })

    return filteredArray;
}

console.log(filterArray(mixedArray , isEven));


////////
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const itemsList = document.querySelector("#items");

const loop = (direction, e) => {
  e.preventDefault();

  if (direction === "right") {
    itemsList.appendChild(itemsList.firstElementChild);
  } else {
    itemsList.insertBefore(itemsList.lastElementChild, items.firstElementChild);
  }
};

right.addEventListener("click", (e) => {
  loop("right", e);
});

left.addEventListener("click", (e) => {
  loop("left", e);
});
