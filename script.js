const cardArray = [
    {
        name: 'anya',
        img:'img/anya.png',
    },
    {
        name: 'chibi',
        img:'img/chibi.png',
    },
    {
        name: 'gaara',
        img:'img/gaara.png',
    },
    {
        name: 'hina',
        img:'img/hina.png',
    },
    {
        name: 'ichi',
        img:'img/ichi.png',
    },
    {
        name: 'kakashi',
        img:'img/kakashi.png',
    },
    {
        name: 'klinok',
        img:'img/klinok.png',
    },
    {
        name: 'klinok1',
        img:'img/klinok1.png',
    },
    {
        name: 'kurisu',
        img:'img/kurisu.png',
    },
    {
        name: 'rentaru',
        img:'img/rentaru.png',
    },
    {
        name: 'sword',
        img:'img/sword.png',
    },
    {
        name: 'todoroki',
        img:'img/todoroki.png',
    },
    {
        name: 'anya',
        img:'img/anya.png',
    },
    {
        name: 'chibi',
        img:'img/chibi.png',
    },
    {
        name: 'gaara',
        img:'img/gaara.png',
    },
    {
        name: 'hina',
        img:'img/hina.png',
    },
    {
        name: 'ichi',
        img:'img/ichi.png',
    },
    {
        name: 'kakashi',
        img:'img/kakashi.png',
    },
    {
        name: 'klinok',
        img:'img/klinok.png',
    },
    {
        name: 'klinok1',
        img:'img/klinok1.png',
    },
    {
        name: 'kurisu',
        img:'img/kurisu.png',
    },
    {
        name: 'rentaru',
        img:'img/rentaru.png',
    },
    {
        name: 'sword',
        img:'img/sword.png',
    },
    {
        name: 'todoroki',
        img:'img/todoroki.png',
    },
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardChosen = []
let cardChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
       const card = document.createElement('img')
       card.setAttribute('src', 'img/back.png')
       card.setAttribute('data-id', i)
       card.addEventListener('click', flipCard)
       gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardChosenIds[0]
    const optionTwoId = cardChosenIds[1]
    console.log(cards)
    console.log('check for match')
    if (optionOneId == optionTwoId) {
        cards[optionTwoId].setAttribute('src', 'img/back.png')
        cards[optionOneId].setAttribute('src', 'img/back.png')
        alert('You have clicked the same images!')        
    }


    if (cardChosen[0] == cardChosen[1]) {
        alert('Found a match!')
        cards[optionOneId].setAttribute('src', 'img/guessed.png')
        cards[optionTwoId].setAttribute('src', 'img/guessed.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardChosen)
        
    } else {
        cards[optionTwoId].setAttribute('src', 'img/back.png')
        cards[optionOneId].setAttribute('src', 'img/back.png')
        alert('Sorry try again!')
    }
    resultDisplay.textContent = cardsWon.length
    cardChosen = []
    cardChosenIds = []

    if (cardsWon.length == cardArray/length/2) {
        resultDisplay.textContent = 'You Win!!!'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId)
    console.log(cardChosen)
    console.log(cardChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}
