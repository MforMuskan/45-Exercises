/*Make an array of your favorite fruits, and then write a series of independent if statements that
check for certain fruits in your array.
• Make an array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit
is in your array, the if block should print a statement,
such as You really like bananas!
NOTE : YOU NEED TO INSTALL SOME PACKAGES
tsconfig.json
npm install @types/node --save-dev
tsc --init */
var favorite_fruits = ['Pomegranate', 'Strawberry', 'Kiwi'];
if (favorite_fruits.includes('Guava')) {
    console.log('I would love to eat Mango');
}
else if (favorite_fruits.includes('Lychee')) {
    console.log('I would really like Lychee');
}
else if (favorite_fruits.includes('Kiwi')) {
    console.log('I would like to eat Kiwi');
}
else if (favorite_fruits.includes('Strawberry')) {
    console.log('I am going to but Strawberries');
}
else if (favorite_fruits.includes('Bananas')) {
    console.log('I would like to eat Bananas');
}
//2nd Case: 
var Available_fruit = 'Banana';
if (favorite_fruits.includes(Available_fruit)) {
    console.log("I am going to buy ".concat(Available_fruit));
}
else {
    console.log('Fruits are not available.');
}
var Available_fruit1 = 'Strawberry';
if (favorite_fruits.includes(Available_fruit1)) {
    console.log("I am going to buy ".concat(Available_fruit1));
}
else {
    console.log('Fruits are not available.');
}
