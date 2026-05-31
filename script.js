
let questions = [
    {
        q: "What is JavaScript?",
        options: ["Programming Language", "Database", "OS", "Browser"],
        answer: "Programming Language"
    },
    {
        q: "What is HTML?",
        options: ["Markup Language", "Programming", "Database", "Server"],
        answer: "Markup Language"
    },
    {
        q: "What is CSS used for?",
        options: ["Styling", "Logic", "Database", "API"],
        answer: "Styling"
    }
];

let index = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("question").innerText = questions[index].q;

    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    questions[index].options.forEach(opt => {
        let btn = document.createElement("button");
        btn.innerText = opt;
        btn.classList.add("option-btn");

        btn.onclick = function() {

            let allBtns = document.querySelectorAll(".option-btn");
            allBtns.forEach(b => b.disabled = true);

            if(opt === questions[index].answer){
                btn.style.background = "green";
                score++;
            } else {
                btn.style.background = "red";
            }
        };

        optionsDiv.appendChild(btn);
    });
}

function nextQuestion() {
    index++;

    if(index < questions.length){
        loadQuestion();
    } else {
        document.getElementById("question").innerText = "Quiz Finished!";
        document.getElementById("options").innerHTML = "";
        document.getElementById("score").innerText =
            "Your Score: " + score + "/" + questions.length;
    }
}

loadQuestion();