const holdbtn = document.getElementById('round');
const nameInput = document.getElementById('gay-name-input');
const textDiv = document.getElementById('p-div');
const flameInput = document.getElementById('flame-name-input1');
const flameInput2 = document.getElementById('flame-name-input2');
const deathName = document.getElementById('death-name-input');
const deathAge = document.getElementById('death-age-input');
const guessRange = document.getElementById('guess-range');
const rangeBtn = document.getElementById('range-btn');
const guessDiv = document.getElementById('guess-div');

var isprocessing = false; // Stop if already running --no duplicates

function getRandomItem(arr) {
  // Generate a random index within the array's bounds
  const randomIndex = Math.floor(Math.random() * arr.length);

  // Return the element at the random index
  return arr[randomIndex];
}

//! GAY GAME
const gayArr = ['Gay💅','Not Gay💪'];
const randomGay = getRandomItem(gayArr);

holdbtn.addEventListener('click',()=>{
    if(isprocessing) return;
    if(nameInput.value !== ''){
        isprocessing = true;
        holdbtn.classList.add('holdanim');
        holdbtn.textContent = 'Checking';
        const oldgaytext = document.querySelector('.gay-p');
        if (oldgaytext) oldgaytext.remove();
        const gaytext = document.createElement('p');
        gaytext.classList.add('gay-p');
        gaytext.textContent = 'wait a moment';
        textDiv.appendChild(gaytext);
        setTimeout(()=>{
            gaytext.textContent = 'Checking '+ nameInput.value+' is gay or not' ;
        },3000);
        setTimeout(()=>{
            gaytext.classList.add('gay-reveal');
            gaytext.textContent = nameInput.value + ' is ' + randomGay;
            holdbtn.classList.remove('holdanim');
            nameInput.value = '';
            isprocessing = false;
        },6000);
    }else{
        alert("Enter a name");
    }
})

//! FALME GAME

const flames = ['marriage👨‍⚖️👰','love💘','crush💖','couple💕','friends😉','enemies😡','one-sided😓','bestie🤩'];
const randomflames = getRandomItem(flames);

holdbtn.addEventListener('click',()=>{
    if(isprocessing) return;   // ⛔ Stop if already running -- initially false assinged
    
    if(flameInput.value && flameInput2.value !== ''){
        isprocessing = true;
        holdbtn.classList.add('holdanim');
        holdbtn.textContent = 'Checking';
        // Remove previous flameText if exists
        const oldFlameText = textDiv.querySelector('.flame-p');
        if (oldFlameText) oldFlameText.remove();
        const flameText = document.createElement('p');
        flameText.classList.add('flame-p');
        flameText.textContent = 'wait a moment';
        textDiv.appendChild(flameText);
        setTimeout(()=>{
            flameText.textContent = 'Checking '+ flameInput.value +' and ' + flameInput2.value + ' relationship' ;
        },3000);
        setTimeout(()=>{
            flameText.classList.add('flame-reveal');
            flameText.classList.add('glow-anim');
            holdbtn.classList.remove('holdanim');
            flameText.textContent = randomflames;
            isprocessing = false;
        },6000);
    }else{
        alert("Enter a name");
    }
});

//! DEATH GAME
function randomAge(age){
    const randomAge = Math.floor(Math.random() * 30);
    return age+randomAge;
}
holdbtn.addEventListener('click',()=>{
    if(isprocessing) return;   // ⛔ Stop if already running -- initially false assinged
    
    if(deathName.value && deathAge.value !== ''){
        isprocessing = true;
        holdbtn.classList.add('holdanim');
        holdbtn.textContent = 'Checking';
        // Remove previous flameText if exists
        const olddeathText = textDiv.querySelector('.flame-p');
        if (olddeathText) olddeathText.remove();
        const deathText = document.createElement('p');
        deathText.classList.add('flame-p');
        deathText.textContent = 'wait a moment';
        textDiv.appendChild(deathText);
        setTimeout(()=>{
            deathText.textContent = 'Going through '+ deathName.value +' life cycles.... ' ;
        },3000);
        setTimeout(()=>{
            deathText.classList.add('flame-reveal');
            deathText.classList.add('glow-anim');
            holdbtn.classList.remove('holdanim');
            deathText.textContent = randomAge(Number(deathAge.value));
            console.log(typeof(deathAge.value))
            isprocessing = false;
        },6000);
    }else{
        alert("Enter a name and current age");
    }
});

//! GUESS NUMBER GAME

rangeBtn.addEventListener('click', () => {
    if (guessRange.value !== '' && Number(guessRange.value) !== 0) {
        // Clear old input if any
        guessDiv.innerHTML = '';

        const Guessinputdiv = document.createElement('input');
        Guessinputdiv.classList.add('input');
        Guessinputdiv.type = 'number';
        Guessinputdiv.placeholder = 'Guess a number';
        guessDiv.appendChild(Guessinputdiv); 
    } else {
        alert("Enter a valid range (not 0 or empty)");
    }
});