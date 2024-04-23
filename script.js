// DOM elements
let start = document.querySelector('.start');
let levelShow = document.querySelector('.level'); 
let points = document.createElement('h1');
let simon_board = document.querySelector('.color-groups');

// Game variables
let point = 0;
let level = 0;
let simon_colors = ['red', 'blue', 'green', 'yellow'];
let user = [];
let sequence = []; 

// Initialize level and points display
let levelShowText = document.createElement('h2');
levelShowText.classList.add('.level');
levelShow.append(levelShowText);
levelShow.append(points);

// Event listener for start button
start.addEventListener('click', () => {
    level = 1;
    start.style.display = 'none';
    console.log('Game Started');
    simon_board.style.display = 'flex';
    levelShowText.innerHTML = `<h2>Level: ${level}</h2>`;  
    points.innerHTML = `Points ${point}`; 

    // Wait for the animation to finish before starting the game
    simon_board.addEventListener('animationend', () => {
        // Start the blinking colors
        simonSays();
    }, { once: true }); // Use once option to remove the event listener after it's triggered once
});


// Function to generate random color
function randomColor() {
    let random = Math.floor(Math.random() * 4);
    return simon_colors[random];
}

// Function to display sequence
function simonSays() {
    // Disable hover effects during blinking
    let colorElements = document.querySelectorAll('.color');
    colorElements.forEach(color => {
        color.classList.add('disable-hover');
    });

    for(let i = 0; i < level; i++) {
        sequence.push(randomColor());
        console.log(`next sequence: ${sequence}`);
    }

    let delay = 1000; // Initial delay
    for(let i = 0; i < sequence.length; i++) {
        setTimeout(() => {
            document.getElementById(sequence[i]).style.opacity = '1';
            setTimeout(() => {
                document.getElementById(sequence[i]).style.removeProperty('opacity');
            }, 500); // Blink duration
        }, delay);
        delay += 1500; // Add delay for the next color
    }
}




// Event listener for user clicks
simon_board.addEventListener('click', (e) => {  
    if (e.target.id) {
        user.push(e.target.id);
        console.log(`User: ${user}`);
        if (user.length === 1 && user[0] !== sequence[0]) {
            alert("You lost. Try again.");
            resetGame();
        }
    }

    if (user.length === sequence.length) {
        checkUser();
    }
});

// Function to check user input against sequence
function checkUser() {
    for (let i = 0; i < sequence.length; i++) {
        if (user[i] !== sequence[i]) {
            console.log(`loose User: ${user} Sequence: ${sequence}`);
            alert("You lost. Try again.");
            resetGame();
            return; // Exit the function
        }
    }

    console.log(`won ${sequence}`);
    console.log('Next Level');
    user = [];
    point += 10 * level;
    level++;
    levelShowText.innerHTML = `<h2>Level: ${level}</h2>`;
    points.innerHTML = `Points: ${point}`;
    sequence = [];
    simonSays();
}

// Function to reset the game
// Function to reset the game
function resetGame() {
    level = 0;
    point = 0;
    sequence = [];
    user = [];
    let colorElements = document.querySelectorAll('.color');
    colorElements.forEach(color => {
        color.style.removeProperty('opacity');
    });
    points.innerHTML = 'Points: 0'; // Reset points to 0
    simonSays(); // Start blinking colors
}
