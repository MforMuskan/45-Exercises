/* You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two
guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two
 people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your
list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an
empty list at the end of your program.*/
var G_list = ['Fatima', 'Haseeba', 'Hania', 'Aliya', 'Saba', 'Maheem', 'Sadaf', 'Alishba'];
console.log("Unfortunately! I am allowed to invite only two guest at my graduation party");
var G_list1 = G_list.pop();
console.group("Sorry! ".concat(G_list1, " You are not invited"));
var G_list2 = G_list.pop();
console.group("Sorry! ".concat(G_list2, " You are not invited"));
var G_list3 = G_list.pop();
console.group("Sorry! ".concat(G_list3, " You are not invited"));
var G_list4 = G_list.pop();
console.group("Sorry! ".concat(G_list4, " You are not invited"));
var G_list5 = G_list.pop();
console.group("Sorry! ".concat(G_list5, " You are not invited"));
var G_list6 = G_list.pop();
console.group("Sorry! ".concat(G_list6, " You are not invited"));
for (var i = 0; i < G_list.length; i++) {
    console.log("Dear ".concat(G_list[i], "!, You are still inviated for dinner at my graduation party."));
}
;
var G_list7 = G_list.pop();
var G_list8 = G_list.pop();
console.log(G_list);
