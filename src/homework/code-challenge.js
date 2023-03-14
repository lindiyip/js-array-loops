const prompt = require ("prompt-sync")();
// i = 9
// text = ""
// while (i < 10) {
//     text += "The number is " + i;
//     i++;
//   }
// console.log(i,text)

const fruitStr = "apple orange mango durian strawberry banana grapefruit raspberry";
let fruits = fruitStr.split(" ");
let input = prompt("Please enter a fruit: ");
let i = 0
let hasMatch = false; // Use to check if there is a match

    while (i < fruits.length) {
        const currentFruit = fruits[i];
        if (currentFruit.toLowerCase() === input.toLowerCase()) {
            console.log("Congratulations!!");
            hasMatch = true; // Set to true when there is a match
            break;
        }
        i++;
        console.log(currentFruit);
    }

    if (!hasMatch) console.log("Word has no match."); 