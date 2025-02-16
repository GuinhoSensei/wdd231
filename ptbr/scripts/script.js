document.addEventListener("DOMContentLoaded", function () {
    // Flashcard flipping functionality
    document.querySelectorAll(".flashcard").forEach(card => {
        card.addEventListener("click", function () {
            alert(`You selected: ${this.dataset.sign}`);
        });
    });

    // Quiz functionality
    document.getElementById("start-quiz").addEventListener("click", function () {
        let quizContainer = document.getElementById("quiz-container");
        quizContainer.innerHTML = "";
        
        let questions = [
            { question: "What is the ASL sign for 'Hello'?", answer: "hello" },
            { question: "What is the ASL sign for 'Thank You'?", answer: "thank you" }
        ];
        
        questions.forEach((q, index) => {
            let div = document.createElement("div");
            div.innerHTML = `<p>${q.question}</p>
                            <input type='text' id='answer-${index}'>
                            <button onclick='checkAnswer(${index}, "${q.answer}")'>Check</button>`;
            quizContainer.appendChild(div);
        });
    });
});

function checkAnswer(index, correctAnswer) {
    let userAnswer = document.getElementById(`answer-${index}`).value.toLowerCase();
    if (userAnswer === correctAnswer) {
        alert("Correct!");
    } else {
        alert("Try again!");
    }
}
