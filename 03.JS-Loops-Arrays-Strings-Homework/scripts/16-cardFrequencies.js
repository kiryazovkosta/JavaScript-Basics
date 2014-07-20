// Write a JavaScript function findCardFrequency(value) that that accepts the following parameters: 
// array of several cards (face + suit), separated by a space. The function calculates and prints at 
// the console the frequency of each card face in format "card_face -> frequency". The frequency is 
// calculated by the formula appearances / N and is expressed in percentages with exactly 2 digits 
// after the decimal point. The card faces with their frequency should be printed in the order of the 
// card face's first appearance in the input. The same card can appear multiple times in the input, 
// but its face should be listed only once in the output. Write JS program cardFrequencies.js that 
// invokes your function with the sample input data below and prints the output at the console. 

function findCardFrequency(value) {
    var cardFrequency = {};

    var cards = value.split(' ');
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        var length = card.length;
        if (length === 2) {
            card = card.substr(0, 1);
        } else if (length == 3) {
            card = card.substr(0, 2);
        }

        if (cardFrequency[card] === undefined) {
            cardFrequency[card] = 1;
        } else {
            cardFrequency[card] = Number(cardFrequency[card]) + 1;
        }
    }

    for (key in cardFrequency) {
        console.log(key + " -> " + calcPercentage(cardFrequency[key], cards.length).toFixed(2));
    }
}

function calcPercentage(number, total) {
    return (number / total) * 100;
}


findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
console.log('');
findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
console.log('');
findCardFrequency('10♣ 10♥');