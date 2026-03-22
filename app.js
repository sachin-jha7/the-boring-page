let cardContainer = document.querySelector(".output-container");
let heading = document.querySelector(".card .heading");
let firstLine = document.querySelector(".first-line");
let secLine = document.querySelector(".second-line");

let moreBtn = document.querySelector(".more-btn");
let backBtn = document.querySelector(".back-btn");
let allBtn = document.querySelectorAll(".card button");


let btnArray = Array.from(allBtn).splice(0, 4);

for (let btn of btnArray) {
    btn.addEventListener("click", () => {
        heading.innerText = btn.innerText;
        if (btn.id == "cat-fact") {
            getCatFact();
            moreBtn.setAttribute("id", "cat-fact");
        } else if (btn.id == "random-fact") {
            getRandomFact();
            moreBtn.setAttribute("id", "random-fact");
        } else if (btn.id == "jokes") {
            getRandomJokes();
            moreBtn.setAttribute("id", "jokes");
        } else if (btn.id == "activity") {
            getActivity();
            moreBtn.setAttribute("id", "activity");
        }
        setTimeout(() => {
            cardContainer.style.display = "flex";
        }, 500);
    });
}


moreBtn.addEventListener("click", () => {
    if (moreBtn.id == "cat-fact") {
        getCatFact();
    } else if (moreBtn.id == "random-fact") {
        getRandomFact();
    } else if (moreBtn.id == "jokes") {
        getRandomJokes();
    } else if (moreBtn.id == "activity") {
        getActivity();
    }
});

backBtn.addEventListener("click", () => {
    cardContainer.style.display = "none";
});


// Random Activity

const activityUrl = "https://bored-api.appbrewery.com/random";

const getActivity = async () => {
    try {
        let response = await fetch(activityUrl);
        let jsonResponse = await response.json();
        console.log(response)
        firstLine.innerText = `
        Activity:- ${jsonResponse.activity}\n
        Type:- ${jsonResponse.type}\n
        Participants:- ${jsonResponse.participants}\n
        Price:- ${jsonResponse.price}\n
        Accessibility:- ${jsonResponse.accessibility}\n
        Duration:- ${jsonResponse.duration}\n
        KidFriendly:- ${jsonResponse.kidFriendly}\n
        Link:- "${jsonResponse.link}
        "`;
        secLine.innerText = "";
    } catch (error) {
        console.log(error);
        firstLine.innerText = error;
        secLine.innerText = "";
    }

}


// Cat Fact

const urlForCat = "https://catfact.ninja/fact";

const getCatFact = async () => {
    try {
        let response = await fetch(urlForCat);
        let jsonResponse = await response.json();
        firstLine.innerText = jsonResponse.fact;
        secLine.innerText = "";
    } catch (error) {
        firstLine.innerText = error;
        secLine.innerText = "";
    }

}


// Random fact

const randomFactUrl = "https://uselessfacts.jsph.pl/api/v2/facts/random";

const getRandomFact = async () => {
    try {
        let response = await fetch(randomFactUrl);
        let jsonResponse = await response.json();
        firstLine.innerText = jsonResponse.text;
        secLine.innerText = "";
    } catch (error) {
        firstLine.innerText = error;
        secLine.innerText = "";
    }
}


// get jokes

const jokesUrl = "https://v2.jokeapi.dev/joke/any";

const getRandomJokes = async () => {
    try {
        let response = await fetch(jokesUrl);
        let jsonResponse = await response.json();
        if (jsonResponse.type == "twopart") {
            firstLine.innerText = jsonResponse.setup;
            secLine.innerText = jsonResponse.delivery;
        } else {
            firstLine.innerText = jsonResponse.joke;
            secLine.innerText = "";
        }
    } catch (error) {
        firstLine.innerText = error;
        secLine.innerText = "";
    }
}
