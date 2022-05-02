import { renderStat, renderGame } from './utils.js';

const form = document.getElementById('add-stat');
const statsList = document.getElementById('stats-list');
const gameList = document.getElementById('game-list');

const remove = document.getElementById('remove');
const save = document.getElementById('save-game');

let stats = [];
let games = [];

// IMPURE RENDER FUNCTIONS
// YOUR CODE MUST CALL THESE FUNCTIONS
function renderGames() {
    gameList.textContent = '';
    for (let game of games) {
        const li = renderGame(game);
        gameList.append(li);
    }
}

function renderStats() {
    statsList.textContent = '';
    for (let item of stats) {
        const li = renderStat(item);
        statsList.appendChild(li);
    }
}

function resetStats() {
    stats = [];
    statsList.textContent = '';
}

form.addEventListener('submit', (e) => {
    const gameData = new FormData(form);
    let game = {
        player: gameData.get('player'),
        points: gameData.get('points'),
    };
    stats.push(game);
    renderStats();
    form.reset();
    e.preventDefault();
    
});

remove.addEventListener('click', () => {
    stats.pop();
    renderStats();
    // Step 2 -- add code to allow users to remove the most recent stat
    // Hint -- how do you remove an element from an array?
    // Hint -- how can we rerender the stats using a function above?
});

save.addEventListener('click', () => {
    let totalPoints = 0;
    for (let points of stats){
        totalPoints += Number(points.points);
    }
    const game = {
        number: games.length + 1,
        totalPoints: totalPoints,
    };
    games.push(game),
    renderGames();
});


    

    // Step 3 - add code to allow users to save the state
    // Loop through the list of stats and add up the total points scored
    // Create a new object with the game number and the total points
    // { number: games.length + 1, totalPoints: totalPoints }
    // Push the new object onto the games array then call renderGames
    // reset the stats with resetStats);
