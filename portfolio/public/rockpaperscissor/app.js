// Game State Variables
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
let roundCount = 1;
let isPlayingRound = false;

// Emoji mapping for selections
const choiceEmojis = {
    rock: '✊',
    paper: '✋',
    scissors: '✌️'
};

// DOM Elements
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const drawScoreEl = document.getElementById('draw-score');
const roundCountEl = document.getElementById('round-count');
const playerChoiceIcon = document.getElementById('player-choice-icon');
const computerChoiceIcon = document.getElementById('computer-choice-icon');
const playerHandWrapper = document.querySelector('#player-hand-display .hand-icon-wrapper');
const computerHandWrapper = document.querySelector('#computer-hand-display .hand-icon-wrapper');
const gameMessageEl = document.getElementById('game-message');
const choiceButtons = document.querySelectorAll('.choice-btn');
const resetBtn = document.getElementById('reset-btn');

// Start a Game Round
function playRound(playerChoice) {
    if (isPlayingRound) return;
    isPlayingRound = true;
    
    // Disable inputs
    choiceButtons.forEach(btn => btn.disabled = true);
    
    // Clear winner/loser glows
    playerHandWrapper.classList.remove('winner-glow-player');
    computerHandWrapper.classList.remove('winner-glow-computer');
    
    // Set matching hands to shaking fists
    playerChoiceIcon.textContent = '✊';
    computerChoiceIcon.textContent = '✊';
    
    // Add shaking classes
    playerHandWrapper.classList.add('shake-player');
    computerHandWrapper.classList.add('shake-computer');
    
    gameMessageEl.textContent = 'Shaking...';
    gameMessageEl.className = 'game-message';
    
    // Computer Choice
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    setTimeout(() => {
        // Remove shaking animations
        playerHandWrapper.classList.remove('shake-player');
        computerHandWrapper.classList.remove('shake-computer');
        
        // Display choices
        playerChoiceIcon.textContent = choiceEmojis[playerChoice];
        computerChoiceIcon.textContent = choiceEmojis[computerChoice];
        
        // Determine Winner
        const result = getResult(playerChoice, computerChoice);
        
        // Update state and styles based on outcome
        if (result === 'win') {
            playerScore++;
            playerScoreEl.textContent = playerScore;
            gameMessageEl.textContent = `You win! ${capitalize(playerChoice)} beats ${capitalize(computerChoice)}.`;
            gameMessageEl.className = 'game-message message-win';
            playerHandWrapper.classList.add('winner-glow-player');
        } else if (result === 'lose') {
            computerScore++;
            computerScoreEl.textContent = computerScore;
            gameMessageEl.textContent = `You lose! ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}.`;
            gameMessageEl.className = 'game-message message-lose';
            computerHandWrapper.classList.add('winner-glow-computer');
        } else {
            drawScore++;
            drawScoreEl.textContent = drawScore;
            gameMessageEl.textContent = `It's a draw! Both chose ${capitalize(playerChoice)}.`;
            gameMessageEl.className = 'game-message message-tie';
        }
        
        // Increment round
        roundCount++;
        roundCountEl.textContent = roundCount;
        
        // Enable inputs
        choiceButtons.forEach(btn => btn.disabled = false);
        isPlayingRound = false;
    }, 1200); // Shaking animation duration
}

// Logic helper
function getResult(player, computer) {
    if (player === computer) return 'draw';
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'win';
    }
    return 'lose';
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Reset Game State
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    drawScore = 0;
    roundCount = 1;
    
    playerScoreEl.textContent = '0';
    computerScoreEl.textContent = '0';
    drawScoreEl.textContent = '0';
    roundCountEl.textContent = '1';
    
    playerChoiceIcon.textContent = '❔';
    computerChoiceIcon.textContent = '❔';
    
    playerHandWrapper.classList.remove('winner-glow-player', 'shake-player');
    computerHandWrapper.classList.remove('winner-glow-computer', 'shake-computer');
    
    gameMessageEl.textContent = 'Make your move!';
    gameMessageEl.className = 'game-message';
    
    choiceButtons.forEach(btn => btn.disabled = false);
}

// Add event listeners
choiceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        playRound(btn.dataset.choice);
    });
});

resetBtn.addEventListener('click', resetGame);
