const images = [
    {
        "image": "bandaged arm image c!andy core.jpg",
        "name": "C!Andy"
    },
    {
        "image": "crow imgae c!ethan core.jpg",
        "name": "C!Ethan"
    },
    {
        "image": "lightning image c!taylor core.jpg",
        "name": "C!Taylor"
    },
    {
        "image": "cute dragin image c!ashlyn core.jpg",
        "name": "C!Ashlyn"
    },
    {
        "image": "gears image c!desca core.jpg",
        "name": "C!Desca"
    },
    {
        "image": "flower embroidery image c!rachel core.jpg",
        "name": "C!Rachel"
    },
    {
        "image": "animals image c!ember core.jpg",
        "name": "C!Ember"
    },
    {
        "image": "art image c!fire core.jpg",
        "name": "C!Fire"
    },
    {
        "image": "knight image c!val core.jpg",
        "name": "C!Val"
    },
    {
        "image": "flying stuff image c!eli core.jpg",
        "name": "C!Eli"
    },
    {
        "image": "wooden hands image c!mossie core.jpg",
        "name": "C!Mossie"
    }
];
const imageImage = document.getElementById("image");
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

    let image = images[randomIndex(images.length)];
    imageImage.src = image.image
    answer = image.name;
    options.push(image.name);

    while(options.length < 4){
        image = images[randomIndex(images.length)];
        if(!options.includes(image.name)){
            options.push(image.name);
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