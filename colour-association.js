const colours = [
    {
        "image": "C!Andy colour palette.png",
        "name": "C!Andy"
    },
    {
        "image": "C!Ashlyn colour palette.png",
        "name": "C!Ashlyn"
    },
    {
        "image": "C!Desca colour palette.png",
        "name": "C!Desca"
    },
    {
        "image": "C!Eli colour palette.png",
        "name": "C!Eli"
    },
    {
        "image": "C!Ember colour palette.png",
        "name": "C!Ember"
    },
    {
        "image": "C!Ethan colour palette.png",
        "name": "C!Ethan"
    },
    {
        "image": "C!Fire colour palette.png",
        "name": "C!Fire"
    },
    {
        "image": "C!Mossie colour palette.png",
        "name": "C!Mossie"
    },
    {
        "image": "C!Rachel colour palette.png",
        "name": "C!Rachel"
    },
    {
        "image": "C!Taylor colour palette.png",
        "name": "C!Taylor"
    },
    {
        "image": "C!Val colour palette.png",
        "name": "C!Val"
    }
];
const colourImage = document.getElementById("colour-image");
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

    let colour = colours[randomIndex(colours.length)];
    colourImage.src = colour.image
    answer = colour.name;
    options.push(colour.name);

    while(options.length < 4){
        colour = colours[randomIndex(colours.length)];
        if(!options.includes(colour.name)){
            options.push(colour.name);
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