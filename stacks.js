class Node {
    constructor(color, number, nextNode = null) {
        this.color = color;
        this.number = number;
        this.nextNode = nextNode;
    }
    getData() {
        return `${this.color} - ${this.number}`;
    }
}

class Stack {
    constructor(limit = 20) {
        this.limit = limit;
        this.size = 0;
        this.topNode = null;
    }

    push = (color, number) => {

        if (this.isFull) {
            console.log(`Your stack is full, you can't add data`);
        } else {
            //create new node
            const newNode = new Node(color, number);
            //link it to the old top (or it will lost the whole link)
            newNode.nextNode = this.topNode;
            // make it the new top
            this.topNode = newNode;
            // increase size
            this.size++;
        }

    };

    pop = () => {
        if (this.isEmpty) {
            return console.log("Your stack is empty");
        } else {
            //change top node to the next node of the old top
            const popped = this.topNode;
            this.topNode = popped.nextNode;
            // decrement the size 
            this.size--;
            // return the old top
            return popped.getData();
        }
    };

    get isFull() {
        return this.size === this.limit;
    }

    get isEmpty() {
        return this.size === 0;
    }


    //we can solve it in one line without condition in this case 
    // because if it was null it will not return a thing
    //peek = () => this.topNode.getData();
    get peek() {
        if (this.isEmpty) console.log("Your stack is empty. Add stuff!");
        else return this.topNode.getData();
    }

    displayData = () => {
        let currentNode = this.topNode;
        while (currentNode) {
            console.log(`number: ${currentNode.number}, color: ${currentNode.color} `)
        }
        currentNode = currentNode.nextNode;

    }
}


const colors = ["red", "blue", "green", "yellow"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const random = (array) => {
    const index = Math.floor(Math.random() * array.length);
    return array[index]
}


const cardsStack = new Stack()
const cardsArray = []

while (!cardsStack.isFull()) {
    // random number
    const number = random(numbers)
    // random color
    const color = random(colors)

    if (!cardsArray.includes([`${color}, ${number}`])) {
        cardsStack.push(color, number);
        cardsArray.push([`${color}, ${number}`]);
    }


}

console.log("Deck : ")
cardsStack.displayData();

let player1 = []
let player2 = []

let i = 0
while (i < 5) {
    player1.push(cardsStack.pop())
    player2.push(cardsStack.pop())
    i++;
}

console.log("player 1  cards: ", player1)
console.log("player 2 cards: ", player2)








console.log("Player 1 Cards:")
for (let a = 0; a < 5; a++) {
    player1.push(getRandom(colors), getRandom(numbers));
    console.log(player1.peek);
}


console.log("--------------")
console.log("Player 2 Cards:")

for (let a = 0; a < 5; a++) {
    player2.push(getRandom(colors), getRandom(numbers));
    console.log(player2.peek);

}



// console.log(player1);
// myDeck.push("blue", 8);
// myDeck.push("yeloow", 20);



// console.log(myDeck.peek);



// console.log(myDeck.pop());