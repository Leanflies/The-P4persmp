const lores = [
    {
        "image": "Lily lore1.png",
        "name": "Lily"
    },
    {
        "image": "C!Andy lore1.png",
        "name": "C!Andy"
    },
    {
        "image": "C!Andy lore2.png",
        "name": "C!Andy"
    },
    {
        "image": "C!Andy lore3.png",
        "name": "C!Andy"
    },
    {
        "image": "C!Ashlyn lore1.png",
        "name": "C!Ashlyn"
    },
    {
        "image": "C!Ashlyn lore2.png",
        "name": "C!Ashlyn"
    },
    {
        "image": "C!Ethan lore1.png",
        "name": "C!Ethan"
    },
    {
        "image": "C!Ethan lore2.png",
        "name": "C!Ethan"
    },
    {
        "image": "C!Rachel lore1.png",
        "name": "C!Rachel"
    },
    {
        "image": "C!Rachel lore2.png",
        "name": "C!Rachel"
    },
    {
        "image": "C!Taylor lore1.png",
        "name": "C!Taylor"
    },
    {
        "image": "C!Taylor lore2.png",
        "name": "C!Taylor"
    },
    {
        "image": "C!Taylor lore3.png",
        "name": "C!Taylor"
    }
];
const loreImage = document.getElementById("image");
const option0 = document.getElementById("option0");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const nextQuestion = document.getElementById("next-question");

let answer = "";
let options = [];
let score = 0;
let remainingLores = [...lores];

window.onload = function() {
    setQuestion();
    option0.addEventListener("click", selectOption);
    option1.addEventListener("click", selectOption);
    option2.addEventListener("click", selectOption);
    option3.addEventListener("click", selectOption);
    nextQuestion.addEventListener("click", setQuestion);
}


function setQuestion() {
    if (remainingLores.length === 0) {
        loreImage.hidden = true;

        option0.hidden = true;
        option1.hidden = true;
        option2.hidden = true;
        option3.hidden = true;

        nextQuestion.hidden = true;

        alert(
            `Quiz finished!\nYour score: ${score}/${lores.length}\n\nClick OK to play again.`
        );
        score = 0;
        remainingLores = [...lores];

        loreImage.hidden = false;
        option0.hidden = false;
        option1.hidden = false;
        option2.hidden = false;
        option3.hidden = false;

        setQuestion();
        return;
    }

    options = [];

    let randomLoreIndex = randomIndex(remainingLores.length);
    let lore = remainingLores[randomLoreIndex];

     remainingLores.splice(randomLoreIndex, 1);

    loreImage.src = lore.image;
    answer = lore.name;
    options.push(lore.name);

    while (options.length < 4) {
        let randomLore = lores[randomIndex(lores.length)];

        if (!options.includes(randomLore.name)) {
            options.push(randomLore.name);
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

function selectOption() {
    option0.disabled = true;
    option1.disabled = true;
    option2.disabled = true;
    option3.disabled = true;

    if (this.innerText === answer) {
        this.style.backgroundColor = "green";
        score++;
    } else {
        this.style.backgroundColor = "red";
    }

    nextQuestion.hidden = false;
}

function randomIndex(index){
    return Math.floor(Math.random() * index);
}
