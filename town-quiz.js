const towns = [
    {
        "image": "Giredale town landscape.jpg",
        "name": "Giredale"
    },
    {
        "image": "landscape image2.jpg",
        "name": "Coalhaven"
    },
    {
        "image": "landscape image4.jpg",
        "name": "The Forrest"
    },
    {
        "image": "landscape image5.jpg",
        "name": "The Forrest"
    },
    {
        "image": "landscape image6.jpg",
        "name": "The Church"
    },
    {
        "image": "landscape image8.jpg",
        "name": "Grimwyck"
    },
    {
        "image": "landscape image9.jpg",
        "name": "Giredale"
    },
    {
        "image": "landscape image10.jpg",
        "name": "Giredale"
    },
    {
        "image": "landscape image12.jpg",
        "name": "The Forrest"
    },
];
const townImage = document.getElementById("image");
const option0 = document.getElementById("option0");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const nextQuestion = document.getElementById("next-question");

let answer = "";
let options = [];
let score = 0;
let remainingTowns = [...towns];

window.onload = function() {
    setQuestion();
    option0.addEventListener("click", selectOption);
    option1.addEventListener("click", selectOption);
    option2.addEventListener("click", selectOption);
    option3.addEventListener("click", selectOption);
    nextQuestion.addEventListener("click", setQuestion);
}


function setQuestion() {
    if (remainingTowns.length === 0) {
        townImage.hidden = true;

        option0.hidden = true;
        option1.hidden = true;
        option2.hidden = true;
        option3.hidden = true;

        nextQuestion.hidden = true;

        alert(
            `Quiz finished!\nYour score: ${score}/${towns.length}\n\nClick OK to play again.`
        );
    score = 0;
        remainingTowns = [...towns];

        townImage.hidden = false;
        option0.hidden = false;
        option1.hidden = false;
        option2.hidden = false;
        option3.hidden = false;

        setQuestion();
        return;
    }

    options = [];

    let randomTownIndex = randomIndex(remainingTowns.length);
    let town = remainingTowns[randomTownIndex];

    remainingTowns.splice(randomTownIndex, 1);

    townImage.src = town.image;
    answer = town.name;
    options.push(town.name);

    while (options.length < 4) {
        let randomTown = towns[randomIndex(towns.length)];

        if (!options.includes(randomTown.name)) {
            options.push(randomTown.name);
        }
    }
let swapIndex = randomIndex(options.length);
    [options[0], options[swapIndex]] = [options[swapIndex], options[0]];

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
        score++;
    }
    else{
        this.style.backgroundColor = "red";
    }

    nextQuestion.hidden = false
}

function randomIndex(index){
    return Math.floor(Math.random() * index);
}