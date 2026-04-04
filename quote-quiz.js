const quotes = [
    {
        "image": "C!Andy quote1.png",
        "name": "C!Andy"
    },
    {
        "image": "C!Desca quote1.png",
        "name": "C!Desca"
    },
    {
        "image": "C!Rachel quote1.png",
        "name": "C!Rachel"
    },
    {
        "image": "C!Eli quote1.png",
        "name": "C!Eli"
    },
    {
        "image": "C!Ethan quote1.png",
        "name": "C!Ethan"
    },
    {
        "image": "C!Desca quote2.png",
        "name": "C!Desca"
    },
    {
        "image": "C!Andy quote2.png",
        "name": "C!Andy"
    },
    {
        "image": "C!Ashlyn quote1.png",
        "name": "C!Ashlyn"
    },
    {
        "image": "C!Rachel quote2.png",
        "name": "C!Rachel"
    },
    {
        "image": "C!Ethan quote2.png",
        "name": "C!Ethan"
    },
    {
        "image": "C!Andy quote3.png",
        "name": "C!Andy"
    },
    {
        "image": "C!Andy quote4.png",
        "name": "C!Andy"
    }
];
const quoteImage = document.getElementById("quote-image");
const option0 = document.getElementById("option0");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const nextQuestion = document.getElementById("next-question");

let answer = "";
let options = [];

window.onload = function() {
    setQuestion();
    option0.addEventListener("click", selectOption);
    option1.addEventListener("click", selectOption);
    option2.addEventListener("click", selectOption);
    option3.addEventListener("click", selectOption);
    nextQuestion.addEventListener("click", setQuestion);
}


function setQuestion() {
    options = [];

    let quote = quotes[randomIndex(quotes.length)];
    quoteImage.src = quote.image
    answer = quote.name;
    options.push(quote.name);

    while(options.length < 4){
        quote = quotes[randomIndex(quotes.length)];
        if(!options.includes(quote.name)){
            options.push(quote.name);
        }
    }

    let swapIndex = randomIndex(options.length);
    options[0] = options[swapIndex];
    options[swapIndex] = answer;

    option0.innerText = options[0];
    option1.innerText = options[1];
    option2.innerText = options[2];
    option3.innerText = options[3];

    option0.disabled = false;
    option1.disabled = false;
    option2.disabled = false;
    option3.disabled = false;

    option0.style.backgroundColor = "grey";
    option1.style.backgroundColor = "grey";
    option2.style.backgroundColor = "grey";
    option3.style.backgroundColor = "grey";

    nextQuestion.hidden = true;
}

function selectOption(){
    option0.disabled = true;
    option1.disabled = true;
    option2.disabled = true;
    option3.disabled = true;

    if (this.innerText == answer){
        this.style.backgroundColor = "green";
    }
    else{
        this.style.backgroundColor = "red";
    }

    nextQuestion.hidden = false
}

function randomIndex(index){
    return Math.floor(Math.random() * index);
}