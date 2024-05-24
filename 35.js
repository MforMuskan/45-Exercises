/* Think of at least three different animals that have a common characteristic. Store the names
of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in common. You could print
a sentence such as Any of these animals would make a great pet!
*/
var animals = ['Rabbit', 'Cat', 'Dog'];
//print out the name of each animal.
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
    //print a statement about each animal
    console.log("".concat(animals[i], " is the cutest animal , it would  make a great pet"));
}
console.log("These animals can stay at your home and go with you anywhere but they need some care and they can be your good pet.");
