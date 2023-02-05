let startButton = document.getElementById('startButton');
let button = document.getElementById('messageButtonGenerator');
let message = document.getElementById('message');
let getBack = document.getElementById('getBack');
let container = document.getElementById('getMessages');
let musicPlayer = document.getElementById('musicPlayer');
let macMiller = document.getElementById('macMiller');

function generateRandomNumber(num){
    return Math.floor(Math.random() * num);
}

const collectiveMessage = {
    mood: ['sad', 'upset', 'lost', 'anxious', 'lonely', 'heartbroken', 'hopeless'],
    alternateMood: ['happy', 'laughing', 'enjoying ur life', 'living like u have never lived', 'enjoying things like before'],
    todo: ['having a cup of coffee', 'going for a walk', 'getting early sleep and healthy meals', 'detoxing from negative apps', 'starting a new hobby', 'learning how to play a new instrument', 'talking out about your feelings']
}

const macMillerQuote = ["\"No matter where life takes me, find me with a smile.\" - Mac Miller", "\"The life you live is more important than the words you speak.\" - Mac Miller", "\"Enjoy the best things in your life cuz you aint gonna get to live it twice.\" - Mac Miller", "\"Someone told me sleep was the cousin of death and following the dollar finds nothing but stress.\" - Mac Miller",
                        "\"If I stay in one mindset or place for too long, I get crazy.\" - Mac Miller", "\"They say you waste time asleep, but Im just trying to dream.\" - Mac Miller", "\"Ima do my thing until the day the reaper come for me. You can keep on grilling, Imma smile back.\" - Mac Miller", "\"People change, and things go wrong, but just remember, life goes on.\" - Mac Miller",
                        "\"Some people need to just stop thinking about everything they do and just do it.\"- Mac Miller", "\"I just like to sing for people who have lost love.\" - Mac Miller", "\"There is a lot of beauty in the world, so go hang out and go be a part of the solution rather than the problem.\" - Mac Miller", "\"I just have always felt as long as I am 100 percent honest, then it's just me. It's a lot easier to sleep at night that way.\" - Mac Miller"]
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
            personalWisdom.push(`You will surely be "${collectiveMessage[prop][optionIdx]}"`);
            break;
        case 'todo':
            personalWisdom.push(`by doing this activity: "${collectiveMessage[prop][optionIdx]}". Hope you will have a good day <3!!`);
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
    musicPlayer.style.display = "block";
}

button.addEventListener('click', showMessage);
button.addEventListener('click', macMillerQuoteGenerator);