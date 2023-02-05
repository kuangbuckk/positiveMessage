let button = document.getElementById('messageButtonGenerator');
let message = document.getElementById('message');
let getBack = document.getElementById('getBack');
let container = document.getElementById('getMessages');
let buttons = document.getElementsByClassName('buttons');

function generateRandomNumber(num){
    return Math.floor(Math.random() * num);
}

const collectiveMessage = {
    mood: ['sad', 'upset', 'angry', 'anxious'],
    alternateMood: ['happy', 'laughing', 'enjoying ur life', 'living like u have never lived', 'enjoying things like before'],
    todo: ['having a cup of coffee', 'going for a walk', 'getting early sleep and healthy meals', 'deleting negative apps', 'starting a new hobby', 'learning how to play a new instrument']
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
    // button.innerHTML = "Regenerate";
    button.style.display = "none";
    // buttons.style.width = "5rem";
    // buttons.style.height = "3rem";
    getBack.style.display = "inline";
}

button.addEventListener('click', showMessage);
