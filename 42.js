/* Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/
var magician_name = ['David', 'Newton', 'Stephen', 'Rocky'];
function show_Magicians(make_great) {
    if (make_great === void 0) { make_great = 'Hello Dear'; }
    for (var _i = 0, magician_name_1 = magician_name; _i < magician_name_1.length; _i++) {
        var magician_names = magician_name_1[_i];
        console.log(make_great, magician_names, '!');
    }
}
show_Magicians();
