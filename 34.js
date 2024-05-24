/* Think of at least three kinds of your favorite pizza. Store these pizza names in an array, and
then use a for loop to print the name of each pizza.
• Modify your loop to print a sentence using the name of the pizza instead of printing just the name of
the pizza. For each pizza you should have one line of output containing a simple statement like I like
pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The
output should consist of three or more lines about the kinds of pizza, you like and then an additional
sentence, such as I really love pizza!
*/
var favorite_Pizza = ['Chicken Fajita', 'Chicken Tikka', 'Spicy Chicken Cheese'];
//print the name of each pizza.
for (var i = 0; i < favorite_Pizza.length; i++) {
    console.log(i, favorite_Pizza[i]);
    //print a sentence using the name of the pizza
    console.log("I really want to eat ".concat(favorite_Pizza[i], " Pizza from Chilli Try Fry"));
} //print meassage outside the loop
console.log("As we all know pizza is an Italian dish but Pakistan's are also good in this and many peoples love to eat pizza, I'm also one of them.Usually pizza's have many flavour and different kind of cheese or topping it depends on person's taste. Personally I love that pizza which have Unloaded Cheese , Black Olives, Unforgettable taste of sauces and obviously hot. ");
