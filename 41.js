/* Make an array of magician’s names. Pass the array to a function called show_magicians(), which
prints the name of each magician in the array.
*/
var magician_names = ['David', 'Newton', 'Stephen'];
function show_magician() {
    for (var _i = 0, magician_names_1 = magician_names; _i < magician_names_1.length; _i++) {
        var magician_name = magician_names_1[_i];
        console.log(magician_name);
    }
}
show_magician();
