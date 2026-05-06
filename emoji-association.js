const emojis = [
    {
        "image": "C!Ethan emojis.png",
        "name": "C!Ethan"
    },
    {
        "image": "Lily emojis.png",
        "name": "Lily"
    },
    {
        "image": "Dirt emojis.png",
        "name": "Dirt"
    },
    {
        "image": "C!Andy emojis.png",
        "name": "C!Andy"
    },
    {
        "image": "Doris emojis.png",
        "name": "Doris"
    },
    {
        "image": "Cheese emojis.png",
        "name": "Cheese"
    },
    {
        "image": "Koda emojis.png",
        "name": "Koda"
    },
    {
        "image": "Tomato emojis.png",
        "name": "Tomato"
    },
    {
        "image": "C!Taylor emojis.png",
        "name": "C!Taylor"
    },
    {
        "image": "C!Ashlyn emojis.png",
        "name": "C!Ashlyn"
    },
    {
        "image": "C!Desca emojis.png",
        "name": "C!Desca"
    },
    {
        "image": "C!Rachel emojis.png",
        "name": "C!Rachel"
    },
    {
        "image": "C!Ember emojis.png",
        "name": "C!Ember"
    },
    {
        "image": "C!Fire emojis.png",
        "name": "C!Fire"
    },
    {
        "image": "C!Val emojis.png",
        "name": "C!Val"
    },
    {
        "image": "C!Eli emojis.png",
        "name": "C!Eli"
    },
    {
        "image": "C!Mossie emojis.png",
        "name": "C!Mossie"
    }
];

let answer = "";
let options = [];
let score = 0;
let currentQuestion = 0;

let remainingEmojis = [...emojis];

const emojiImage = document.getElementById("emoji-image");
const option0 = document.getElementById("option0");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const nextQuestion = document.getElementById("next-question");


window.onload = function() {
    setQuestion();
    option0.addEventListener("click", selectOption);
    option1.addEventListener("click", selectOption);
    option2.addEventListener("click", selectOption);
    option3.addEventListener("click", selectOption);
    nextQuestion.addEventListener("click", setQuestion);
}


function setQuestion() {
    if (remainingEmojis.length === 0) {
        emojiImage.hidden = true;

        option0.hidden = true;
        option1.hidden = true;
        option2.hidden = true;
        option3.hidden = true;

        nextQuestion.hidden = true;

alert(`Quiz finished!\nYour score: ${score}/${emojis.length}\n\nClick OK to play again.`);
        score = 0;
    remainingEmojis = [...emojis];

    emojiImage.hidden = false;

    setQuestion();
    return;
    }

    options = [];

    let randomEmojiIndex = randomIndex(remainingEmojis.length);
    let emoji = remainingEmojis[randomEmojiIndex];

    remainingEmojis.splice(randomEmojiIndex, 1);

    emojiImage.src = emoji.image;
    answer = emoji.name;
    options.push(emoji.name);

    while (options.length < 4) {
        let randomEmoji = emojis[randomIndex(emojis.length)];

        if (!options.includes(randomEmoji.name)) {
            options.push(randomEmoji.name);
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

    option0.hidden = false;
    option1.hidden = false;
    option2.hidden = false;
    option3.hidden = false;

    nextQuestion.hidden = true;

}

function selectOption(){
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

    nextQuestion.hidden = false
}

function randomIndex(index){
    return Math.floor(Math.random() * index);
}
