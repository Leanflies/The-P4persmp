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
const townImage = document.getElementById("town-image");
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

    let town = towns[randomIndex(towns.length)];
    townImage.src = town.image
    answer = town.name;
    options.push(town.name);

    while(options.length < 4){
        town = towns[randomIndex(towns.length)];
        if (!options.includes(town.name)) {
            options.push(town.name);
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
