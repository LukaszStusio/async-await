console.log('Works.');

const wait = (ms = 0) =>  new Promise(resolve => setTimeout(resolve, ms));


async function go() {
    await wait(1000);
    console.log('starting');
    await wait(1000);
    console.log('running');
    await wait(2000);
    console.log('ending');
}

go();



// 1 - Change the text to "Hell opened" when clicked, after one second
// 2 - Make it a square after one second
// 3 - Make it pink after half a second
// 4 - Make it circle after quarter a second
// 5 - Make it violet after after 0.3 second
// 6 - Fade it out after half a second

const trigger = document.querySelector('.trigger');

const noiseBoxChaos = document.querySelector('.noise-box-chaos');

const resetButton = document.createElement('button');
resetButton.classList.add('reset-button');
resetButton.innerHTML = "Reset the Hell";


// old code:
async function animateNew(e) {
    const element = e.currentTarget;

    // 1 - Change the text to "Hell opened" when clicked, after one second
    // 2 - Make it a square after one second
    await wait(1000);
        element.textContent = 'Hell opened';
        element.classList.remove('circle');

    // 3 - Make it pink after half a second
    await wait(500);
        element.classList.add('pink');

    // 4 - Make it circle after quarter a second
    await wait(250);
        element.classList.add('circle');

    // 5 - Make it violet after after 0.3 second
    await wait(300);
        element.classList.remove('pink');
        element.classList.add('violet');

    // 6 - Fade it out after half a second
    await wait(500);
        element.classList.add('fade-out');

    // 7 - bonus: remove the element, add reset button, remove rest & add default button;
    await wait(510);
        noiseBoxChaos.appendChild(resetButton);
        const buttonToRemove = document.querySelector('.reset-button');
        buttonToRemove.addEventListener('click', function(event) {
            event.currentTarget.remove();
            element.classList.remove('violet', 'fade-out')
            element.textContent = 'Click me again!';
        });
};

// Event listenes:
trigger.addEventListener('click', animateNew);