const grid = document.querySelector('.grid');

const characters = [
    'beth',
    'jerry',
    'jesica',
    'morty',
    'pessoa-passaro',
    'rick',
    'summer',
    'meeseeks',
    'scroopy',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}


const createCard = (character) => {

    const card = document.createElement('div', 'card');
    const front = document.createElement('div', 'face front');
    const back = document.createElement('div', 'face back');

    front.style.backgroundImage = `url('../img/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    return card;
}

const loadGame = () => {

    const duplicateCharacters = [ ...characters, ...characters ];

    duplicateCharacters.forEach((character) => {
        
        const card = createCard(character);
        grid.appendChild(card);

    })
}

loadGame()