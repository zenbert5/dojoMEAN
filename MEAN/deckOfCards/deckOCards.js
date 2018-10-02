/******************************************************************
 * 
 *  MEAN OOP - Deck Of Cards
 *  shawn chen
 *  Oct 1, 2018
 *  codingDojo
 * 
 ******************************************************************/

// Card class
class Card {
    constructor(value, name, suit) {
        this.suit = suit;
        this.name = name;
        this.value = value;
    }
    show() {
        console.log("Card: " + this.name + " of " + this.suit);
    }
}

// Deck Class
class Deck {
    constructor() {
        this.suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
        this.names = [
            "Ace",
            "Two",
            "Three",
            "Four",
            "Five",
            "Six",
            "Seven",
            "Eight",
            "Nine",
            "Ten",
            "Jack",
            "Queen",
            "King"
        ];
        this.deck = [];
        // initialize deck
        for (let s=0; s < this.suits.length; s++) {
            for (let n=0; n < this.names.length; n++) {
                this.deck.push(new Card(n+1, this.names[n], this.suits[s]));
            }    
        }
    }
    // display entire deck
    display() {
        console.log(this.deck);
        return this;
    }
    // reset
    reset() {
        this.deck = [];
        return this;
    }
    // deal card
    deal() {
        let n = Math.floor(Math.random() * this.deck.length);
        let card;
        console.log(this.deck[n]);
        card = this.deck[n];
        delete this.deck[n];
        return card;
    }
    // shuffle the deck
    shuffle() {
        var copy = [], n = this.deck.length, i;
        while (n) {
            i = Math.floor(Math.random() * this.deck.length);
            if (i in this.deck) {
                copy.push(this.deck[i]);
                delete this.deck[i];
                n--;
            }
        }
        this.deck = copy;
        return this;
    }
}

class Player extends Deck {
    constructor(name){
        super();
        this.name = name;
        this.hand = [];
    }
    getCard () {
        this.hand.push(this.deal());
        return this;
    }
    showHand() {
        for (let h=0; h < this.hand.length; ++h) {
            console.log('Card #[' + h + '] --> ' + this.hand[h].suit + ' ' + this.hand[h].name);
        }
        return this;
    }
    dropCard(num) {
        if (num <= this.hand.length) {
            this.hand.splice(num-1, 1);
            return this;
        } else {
            console.log('You do not have that many cards.');
            return this;
        }
    }
}



/*
 *  MAIN
 */


myDeck = new Deck();
myDeck.display();
myDeck.shuffle();
myDeck.display();

player1 = new Player('shawn');
player1.showHand();
player1.getCard();
player1.getCard();
player1.getCard();
player1.getCard();
player1.getCard();
player1.showHand();
player1.dropCard(2);
player1.showHand();
