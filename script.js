let startButton = document.getElementById('startButton');
let button = document.getElementById('messageButtonGenerator');
let message = document.getElementById('message');
let getBack = document.getElementById('getBack');
let container = document.getElementById('getMessages');
let audio = document.getElementById('audio');
let macMiller = document.getElementById('macMiller');

function generateRandomNumber(num){
    return Math.floor(Math.random() * num);
}

const collectiveMessage = {
    mood: ['sad', 'upset', 'angry', 'anxious'],
    alternateMood: ['happy', 'laughing', 'enjoying ur life', 'living like u have never lived', 'enjoying things like before'],
    todo: ['having a cup of coffee', 'going for a walk', 'getting early sleep and healthy meals', 'deleting negative apps', 'starting a new hobby', 'learning how to play a new instrument']
}

const macMillerQuote = ["No matter where life takes me, find me with a smile. - Mac Miller", "The life you live is more important than the words you speak.- Mac Miller", "Enjoy the best things in your life cuz you aint gonna get to live it twice.- Mac Miller", "Someone told me sleep was the cousin of death and following the dollar finds nothing but stress.- Mac Miller"]
function macMillerQuoteGenerator(){
    macMiller.innerHTML = macMillerQuote[generateRandomNumber(macMillerQuote.length)];
}

let personalWisdom = [];

  // Iterate over the object
for(let prop in collectiveMessage){
    let optionIdx = generateRandomNumber(collectiveMessage[prop].length);
    switch(prop){
        case 'mood':
            personalWisdom.push(`I guess you have been currently "${collectiveMessage[prop][optionIdx]}".`);
            break;
        case 'alternateMood':
            personalWisdom.push(`You will surely be "${collectiveMessage[prop][optionIdx]}".`);
            break;
        case 'todo':
            personalWisdom.push(`By doing this activity: "${collectiveMessage[prop][optionIdx]}".`);
            break;
        default:
            personalWisdom.push('There is not enough info.');
    }
}

function formatWisdom(wisdom) {
    const formatted = personalWisdom.join('\n')
    return formatted; 
}

function showMessage(){
    message.innerHTML = formatWisdom(personalWisdom);
    message.style.display = "inline-block";
    button.style.display = "none";
    getBack.style.display = "inline";
    audio.display = "inline-block";
}

button.addEventListener('click', showMessage);
button.addEventListener('click', macMillerQuoteGenerator);