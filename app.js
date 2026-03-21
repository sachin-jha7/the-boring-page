// HEADING COLOR EFFECT

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");

let red1 = Math.floor(Math.random() * 255);
let green1 = Math.floor(Math.random() * 255);
let blue1 = Math.floor(Math.random() * 255);

let red2 = Math.floor(Math.random() * 255);
let green2 = Math.floor(Math.random() * 255);
let blue2 = Math.floor(Math.random() * 255);

let red3 = Math.floor(Math.random() * 255);
let green3 = Math.floor(Math.random() * 255);
let blue3 = Math.floor(Math.random() * 255);

let red4 = Math.floor(Math.random() * 255);
let green4 = Math.floor(Math.random() * 255);
let blue4 = Math.floor(Math.random() * 255);

let red5 = Math.floor(Math.random() * 255);
let green5 = Math.floor(Math.random() * 255);
let blue5 = Math.floor(Math.random() * 255);

let red6 = Math.floor(Math.random() * 255);
let green6 = Math.floor(Math.random() * 255);
let blue6 = Math.floor(Math.random() * 255);

one.style.color = `rgb(${red1},${green1},${blue1})`;
two.style.color = `rgb(${red2},${green2},${blue2})`;
three.style.color = `rgb(${red3},${green3},${blue3})`;
four.style.color = `rgb(${red4},${green4},${blue4})`;
five.style.color = `rgb(${red5},${green5},${blue5})`;
six.style.color = `rgb(${red6},${green6},${blue6})`;

// MAIN

let mainBox = document.querySelector(".btn-container");
let output = document.querySelector(".result");
let backBtn = document.querySelector(".backBtn");
let moreBtn = document.querySelector(".moreBtn");
let heading = document.querySelector(".heading");

let p1 = document.querySelector(".first-line");
let p2 = document.querySelector(".second-line");
let p3 = document.querySelector(".third-line");
let p4 = document.querySelector(".fourth-line");
let p5 = document.querySelector(".fifth-line");
let p6 = document.querySelector(".sixth-line");
let p7 = document.querySelector(".seventh-line");
let p8 = document.querySelector(".eigth-line");

let clearRestLines = () => {
    p3.innerText = "";
    p4.innerText = "";
    p5.innerText = "";
    p6.innerText = "";
    p7.innerText = "";
    p8.innerText = "";
}

let catFactBtn = document.querySelector(".fact-btn");
let earthBtn = document.querySelector(".earth-facts");
let randomFactBtn = document.querySelector(".useless-facts");
let jokeBtn = document.querySelector(".joke-btn");
let quoteBtn = document.querySelector(".quote-btn");
let getActivityBtn = document.querySelector(".activity-btn");

let cat_fact = false; let earth_fact = false; let random_fact = false; let joke = false; let quote = false; let activity = false;

let uniqueTimestamp;
getActivityBtn.addEventListener("click", () => {
    uniqueTimestamp = Math.floor(Math.random() * 55);
    setTimeout(() => {
        mainBox.style.display = "none";
        output.style.display = "block";
    }, 250);
    activity = true;
    cat_fact = false;
    earth_fact = false;
    random_fact = false;
    joke = false;
    quote = false;
    heading.innerText = "Random Activity";
    moreBtn.innerText = "Next";
    output.classList.add("activity-color");
    // output.style.fontFamily = "Roberto";
    getActivity();
});

catFactBtn.addEventListener("click", () => {
    setTimeout(() => {
        mainBox.style.display = "none";
        output.style.display = "block";
    }, 250);
    cat_fact = true;
    acitivity = false;
    earth_fact = false;
    random_fact = false;
    joke = false;
    quote = false;
    heading.innerText = "Random Cat Facts";
    moreBtn.innerText = "More Facts";
    output.classList.remove("activity-color");
    clearRestLines();
    randomCatFact();
});

earthBtn.addEventListener("click", () => {
    setTimeout(() => {
        mainBox.style.display = "none";
        output.style.display = "block";
    }, 250);
    cat_fact = false;
    activity = false;
    earth_fact = true;
    random_fact = false;
    joke = false;
    quote = false;
    heading.innerText = "Random Earth Facts";
    moreBtn.innerText = "More Facts";
    output.classList.remove("activity-color");
    clearRestLines();
    earthFacts();
});

randomFactBtn.addEventListener("click", () => {
    setTimeout(() => {
        mainBox.style.display = "none";
        output.style.display = "block";
    }, 250);
    cat_fact = false;
    activity = false;
    earth_fact = false;
    random_fact = true;
    joke = false;
    quote = false;
    heading.innerText = "Random Facts";
    moreBtn.innerText = "More Facts";
    output.classList.remove("activity-color");
    clearRestLines();
    uselessFact();
});

jokeBtn.addEventListener("click", () => {
    setTimeout(() => {
        mainBox.style.display = "none";
        output.style.display = "block";
    }, 250);
    activity = false;
    cat_fact = false;
    earth_fact = false;
    random_fact = false;
    joke = true;
    quote = false;
    heading.innerText = "Programming Jokes";
    moreBtn.innerText = "More Jokes";
    output.classList.remove("activity-color");
    clearRestLines();
    programmingJokes();
});

quoteBtn.addEventListener("click", () => {
    setTimeout(() => {
        mainBox.style.display = "none";
        output.style.display = "block";
    }, 250);
    activity = false;
    cat_fact = false;
    earth_fact = false;
    random_fact = false;
    joke = false;
    quote = true;
    heading.innerText = "Game Of Thrones Quotes";
    moreBtn.innerText = "More Quotes";
    output.classList.remove("activity-color");
    clearRestLines();
    GOTquotes();
});

moreBtn.addEventListener("click", () => {
    if (cat_fact) {
        randomCatFact();
    } else if (earth_fact) {
        earthFacts();
    } else if (random_fact) {
        uselessFact();
    } else if (joke) {
        programmingJokes();
    } else if (quote) {
        GOTquotes();
    } else if(activity) {
        getActivity();
    }
});

backBtn.addEventListener("click", () => {
    mainBox.style.display = "flex";
    output.style.display = "none";
});

// Random Activity
// const proxyUrl = "https://api.allorigins.win/raw?url=";
let urlForData = "https://bored-api.appbrewery.com/random";

// const newApiUrl = `${urlForData}?t=${uniqueTimestamp}`;
// const finalUrl = proxyUrl + encodeURIComponent(newApiUrl);
let getActivity = () => {
    fetch(urlForData)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            // console.log(data);
            moreBtn.innerText = "Next";
            moreBtn.classList.remove("error");
            p1.style.color = `rgb(${red1},${green2},${blue3})`;
            p2.style.color = `rgb(${red2},${green1},${blue3})`;
            p3.style.color = `rgb(${red3},${green2},${blue1})`;
            p4.style.color = `rgb(${red4},${green5},${blue6})`;
            p5.style.color = `rgb(${red6},${green1},${blue6})`;
            p6.style.color = `rgb(${red5},${green3},${blue4})`;
            p7.style.color = `rgb(${red1},${green6},${blue1})`;
            p8.style.color = `rgb(${red3},${green5},${blue6})`;
            p1.innerText = `Activity:- ${data.activity}`;
            p2.innerText = `Type:- ${data.type}`;
            p3.innerText = `Participants:- ${data.participants}`;
            p4.innerText = `Price:- ${data.price}`;
            p5.innerText = `Accessibility:- ${data.accessibility}`;
            p6.innerText = `Duration:- ${data.duration}`;
            p7.innerText = `KidFriendly:- ${data.kidFriendly}`;
            p8.innerText = `Link:- "${data.link}"`;
        })
        .catch((e) => {
            p1.style.color = "red";
            moreBtn.innerText = "Try Again";
            moreBtn.classList.add("error");
            p1.innerText = e;
            p2.innerText = "";
            clearRestLines();
        })
}

// Random Cat Facts
let urlForCat = "https://catfact.ninja/fact";
function randomCatFact() {
    fetch(urlForCat)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            p1.style.color = "black";
            moreBtn.innerText = "More Facts";
            moreBtn.classList.remove("error");
            p1.innerText = `"${data.fact}"`;
            p2.innerText = "";
        })
        .catch((e) => {
            p1.style.color = "red";
            moreBtn.innerText = "Try Again";
            moreBtn.classList.add("error");
            p1.innerText = "You've reached max limit";
            p2.innerText = "";
        })
}

// Random Earth Facts
let earthUrl = "https://api.bootprint.space/all/earth";
function earthFacts() {
    fetch(earthUrl)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            p1.style.color = "black";
            moreBtn.innerText = "More Facts";
            moreBtn.classList.remove("error");
            p1.innerText = `"${data.fact}"`;
            p2.innerText = "";
        })
        .catch((e) => {
            p1.style.color = "red";
            moreBtn.innerText = "Try Again";
            moreBtn.classList.add("error");
            p1.innerText = "You've reached max limit";
            p2.innerText = "";
        })
}

// useless facts 
let uselessFactUrl = "https://uselessfacts.jsph.pl/api/v2/facts/random";
function uselessFact() {
    fetch(uselessFactUrl)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            p1.style.color = "black";
            moreBtn.innerText = "More Facts";
            moreBtn.classList.remove("error");
            p1.innerText = `"${data.text}"`;
            p2.innerText = "";
        })
        .catch((e) => {
            p1.style.color = "red";
            moreBtn.innerText = "Try Again";
            moreBtn.classList.add("error");
            p1.innerText = "You've reached max limit";
            p2.innerText = "";
        })
}

// Random Programming Jokes
let codingJokesUrl = "https://v2.jokeapi.dev/joke/Programming";
function programmingJokes() {
    fetch(codingJokesUrl)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            p1.style.color = "black";
            moreBtn.innerText = "More Jokes";
            moreBtn.classList.remove("error");
            //console.log(data);
            if (data.type == "twopart") {
                p1.innerText = data.setup;
                p2.innerText = `:- ${data.delivery}`;
            } else if (data.type == "single") {
                p1.innerText = data.joke;
                p2.innerText = "";
            }
        })
        .catch((e) => {
            p1.style.color = "red";
            moreBtn.innerText = "Try Again";
            moreBtn.classList.add("error");
            p1.innerText = "You've reached max limit";
            p2.innerText = "";
        })
}

// Game of Thrones quotes
let GOTUrl = "https://api.gameofthronesquotes.xyz/v1/random";
function GOTquotes() {
    fetch(GOTUrl)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            p1.style.color = "black";
            moreBtn.innerText = "More Quotes";
            moreBtn.classList.remove("error");
            p1.innerText = `"${data.sentence}"`;
            p2.innerText = `:- ${data.character.name}`;
        })
        .catch((e) => {
            p1.style.color = "red";
            moreBtn.innerText = "Try Again";
            moreBtn.classList.add("error");
            p1.innerText = "You've reached max limit";
            p2.innerText = "";
        })
}
