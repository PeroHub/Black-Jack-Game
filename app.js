
let player = {
    name: "Hey,",
    chips: 50
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")
let refreshEl = document.querySelector("#refresh")

//Balance here
let balanceEL = document.querySelector("#bal")
let final  = 1000
//Balance here



function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
    
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += `${cards[i]} `
    }
    
    sumEl.textContent = `Sum: ${sum}`
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        let win = {
            name: "Hey Player",
            chips: 500
        }
        playerEl.textContent = `wow! ${win.name} you just won $${win.chips}`
        message = "Congrats! You've got Blackjack! 🥳"
        hasBlackJack = true
        let bal = final + win.chips
        balanceEL.textContent = `Balance: ${bal}`
    } else {
        message = "You're out of the game! 😭"
        playerEl.textContent = `${player.name} you've loose $${player.chips}`
        refreshEl.textContent = "Refresh if you are out to cont. playing"
        isAlive = false

        //Balance reduction function
        checkBalance()
    }
    messageEl.textContent = message

    
}

//Fuction to check reduction of balance
function checkBalance() {
        //Reduce balance if user looses
        let bal = final - player.chips
        balanceEL.textContent = `Balance: ${bal}`
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
