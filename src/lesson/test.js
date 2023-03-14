const prompt = require ("prompt-sync")();

// let fruitsexample1 = ["apple", "orange", "mango", "durian"]
// fruitsexample1.push("strawberry")
// console.log(fruitsexamples1)

// array = ["apple",1,2,3, true]
// array = array.sort()
// console.log(array) // Number comes first, follow by alphabets then boolean

const fruitStr = "apple orange mango durian strawberry banana grapefruit raspberry";
let fruits = fruitStr.split(" "); // can also split by .split("")

const input = "banana";
let hasMatch = false 

for (let i = 0; i < fruits.length; i++){
    const currentFruit = fruits[i];
    if (currentFruit.toLowerCase() === input.toLowerCase()){
        console.log("congratulations!");
        hasMatch = true;
        break;
    }
    console.log(currentFruit);  
}

// if(!hasMatch) console.log("Words has no match.")
