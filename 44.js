/* Write a function that accepts an array of items a person wants on a sandwich. The function
should have one parameter that collects as many items as the function call provides, and it should
print a summary of the sandwich that is being ordered. Call the function three times, using a different
number of arguments each time.
*/
//array as a parameter
function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return "I want a sandwich of ".concat(items, " ");
}
var Mysandwich = sandwich("Ham", " Lettuce", " Cheese");
var Mysandwich2 = sandwich('Mexican', ' Swiss');
var Mysandwich3 = sandwich(); //without argument
console.log(Mysandwich);
console.log(Mysandwich2);
console.log(Mysandwich3);
