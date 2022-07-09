
class Card {
    constructor (suit, value, description) {
        this.suit = suit;
        this.value = value;
        this.description = description;
    }
}

class Deck {
    constructor () {
        this.deckOfCards = [];
        this.createHand ();
    }
        createHand () {
            const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
            let counts = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'Ace'];
           

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < counts.length; j++) {
                
                this.deckOfCards.push (new Card (suits[i], counts[j], `${counts[j]} of ${suits[i]}`));
            }
        }  
    }
    
}

let newDeck = new Deck();
console.log(newDeck);

class Player {
    constructor (name) {
        this.name = name;
        this.hand = [];
        this.score = 0;
    }
}


class startGame {
    constructor (deck, players) {
        this.deck = deck;
        this.players = players;
    }

    shuffleCards () {
        for (let i = this.deck.deckOfCards.length - 1; i > 0; i--) {
            let x = Math.floor(Math.random() * (i + 1));
            let temp = this.deck.deckOfCards[i];
            this.deck.deckOfCards[i] = this.deck.deckOfCards[x];
            this.deck.deckOfCards[x] = temp;
        }
    
    }

    dealCards () {
       let list = this.deck.deckOfCards;
       let half = Math.ceil(list.length / 2);
       
       this.players[0].hand = list.slice (0, half);
       this.players[1].hand = list.slice (-half);
    }   

    displayWinner (score) {
        if (score[0] > score[1]) {
            alert('Well played! Player 1 wins.')
        } else alert ('Well played! Player 2 wins.')
    }

    compareCards() {
        let player1Score = 0;
        let player2Score = 0;
        let playersScore = [];

    for (let i = 0; i < this.players[0].hand.length; i++) {  
        if (player1.hand[i].value < player2.hand[i].value) {
                player2Score++
                alert (`Player 2 Wins Round: ${i+1}!
                player1: ${player1.hand[i].description} 
                player2: ${player2.hand[i].description} 
                player1: ${player1Score}
                player2: ${player2Score} `)
            
        } else if (player1.hand[i].value > player2.hand[i].value) {
                player1Score++
                alert (`Player 1 Wins Round: ${i+1}!
                player1: ${player1.hand[i].description} 
                player2: ${player2.hand[i].description} 
                player1: ${player1Score}
                player2: ${player2Score} `)
        
        } else { 
                alert (`Tie, Round: ${i+1}, no points.
                player1: ${player1.hand[i].description} 
                player2: ${player2.hand[i].description} 
                player1: ${player1Score}
                player2: ${player2Score} `)
                
        }
                
    }            
        playersScore.push(player1Score, player2Score)
        return playersScore;
}

}


let fullDeck = new Deck ();
let player1 = new Player ('Bob');
let player2 = new Player ('Sally');

const game = new startGame (fullDeck, [player1, player2]);

game.shuffleCards ();
game.dealCards ();
score = game.compareCards();
game.displayWinner(score);


console.log(player1.hand);
console.log(player2.hand);

