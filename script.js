// Text Adventure Game

const enter = 'Please enter 1 or 2 for your answer.';
const gameOver = 'SORRY, YOU LOSE!';
const start = 'Welcome to the Ghostbusters Text Adventure Game. Click "OK" to start.';



// QUESTION 1
const q1 = `You are trying to catch a ghost called "Slimer" at the Sedgewick Hotel but you have not seen him yet. Should you...
1. Take the Elevator to the 12th floor.
2. Wait in the lobby.

${enter}
`;

const gameOver1 = `You waited, but Slimer never appeared in the lobby and proceeded to spread ectoplasm throughout the hotel.

${gameOver}`;




// QUESTION 2
const q2 = `When you get off the elevator, a noise startles you. Should you...
1. Search for the source of the noise.
2. Blind-fire your proton pack.

${enter}
`;

const gameOver2 = `It was the hotel maid and you nearly killed her and you were subsequently expelled from the hotel. Look before you shoot!

${gameOver}
`;




// QUESTION 3
const q3 = `It was just the hotel maid. So you walk around to look for Slimer and you spot him! Should you...
1. Call the other Ghostbusters to you.
2. Hide and observe him.

${enter}
`;

const gameOver3 = `Slimer heard your shout and fled, but not before sliming you!

${gameOver}
`;




const q4 = `You see Slimer enter the ballroom. You quickly rally the other Ghostbusters and you all head in. You see him circling above when you walk in. Should you...

1. Shoot at him with your proton pack.
2. Cross the streams!

${enter}
`;

const gameOver4 = `All life as you know it stops instantaneously and every molecule in your body explodes at the speed of light. You never cross the streams!

${gameOver}
`;




const q5 = `You wrangled Slimer with your shot and the ghost trap is set underneath him. You notice a bright light emitting from the trap and are tempted to look at it. Should you...
1. Look at the trap.
2. Keep your focus on Slimer.

${enter}
`;

const gameOver5 = `You looked at the trap and the light blinded you!

${gameOver}
`;



const win = 'Slimer was sucked into the Ghost Trap and it quickly close itself. Congratulations! You caught Slimer!';




// Alert the user to start the game
alert(start);

// Sets the value of userInput to the users entry and assigns it to the variable
let userInput = prompt(q1);

// Nested conditional statements

// Q1
if (userInput == 1 ) {
    console.log('Correct 1');
    // userInput;
    userInput = prompt(q2);
    if (userInput == 1) {
        console.log('Correct 2');
        // userInput;
        userInput = prompt(q3);
        if (userInput == 2) {
            console.log('Correct 3');
            // userInput;
            userInput = prompt(q4);
            if (userInput == 1) {
                console.log('Correct 4');
                // userInput;
                userInput = prompt(q5);
                if (userInput == 2) {
                    console.log('Correct 5');
                    alert(win);
                }
            }
        }
    } else {
        alert(gameOver2);
    }

} else {
    alert(gameOver1);
};

// let userInput = prompt;


// if (userInput(q1) == 1 ) {
//     console.log('Good choice');
//     userInput(q2);

//     if (userInput == 1) {
//         console.log('Good choice');
//     } else {
//         alert(gameOver2);
//     }

// } else {
//     alert(gameOver1);
// };
























