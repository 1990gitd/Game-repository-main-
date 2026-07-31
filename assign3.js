

console.log("Rock Paper Scissor");

const choices = ["Rock", "Paper", "Scissor"];

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;


function playGame(playerChoice) {

    const randomNumber = Math.floor(Math.random() * 3);

    const computerChoice = choices[randomNumber];
    document.getElementById("playerChoice").innerText = playerChoice;
    document.getElementById("computerChoice").innerText = computerChoice;


    if (playerChoice === computerChoice) {
        drawScore++;
        document.getElementById("result").innerText="🤝 Draw";
        document.getElementById("drawScore").innerText=drawScore;

    }
   else if (
    (playerChoice === "Rock" && computerChoice === "Scissor") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissor" && computerChoice === "Paper")
) {

    playerScore++;

    document.getElementById("result").innerText = "🎉 Player Wins";
    document.getElementById("playerScore").innerText = playerScore;

}
else {

    computerScore++;

    document.getElementById("result").innerText = "💻 Computer Wins";
    document.getElementById("computerScore").innerText = computerScore;

} }