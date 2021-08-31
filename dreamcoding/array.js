'use strict';

// 1. Delaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. index position 
const fruits = ['apple','banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);

// 3. Looping over an array
// A. for loop

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// B. for of

for(let fruit of fruits){
    console.log(fruit);
}

// C. forEach

fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push : add an item to the end
fruits.push('🍔','🍿');
console.log(fruits);

// pop : remove an item from the end 
fruits.pop();
fruits.pop();   
console.log(fruits);

// unshift : add adn item to the benigging
fruits.unshift('🍓','🍋');
console.log(fruits);

// shift : remove an item from benigging
fruits.shift();
fruits.shift();
console.log(fruits);

//splice : remove an item by index position
fruits.push('🍓','🍅','🍆');
fruits.splice(1,1);
console.log(fruits);

//cobine two arrays
const fruits2 = ['🍖','🍕'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5.Searching
// indexOf : find the index

console.log(fruits);
console.log(fruits.indexOf('🍓'));

// includes
console.log(fruits.includes('🍙'));

// lastIndexOf
fruits.push('🍓');
console.log(fruits.lastIndexOf('🍓'));  
