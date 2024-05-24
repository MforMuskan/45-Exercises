/*Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are
inviting to dinner */
var Guest_list4 = ['Haseeba', 'Sadaf', 'Maheem', 'Alishba', 'Umm-e-Hani', 'Aliya'];
var n_list = Guest_list4.unshift('Kashish');
console.log("I am inviting ".concat(n_list, " friends to dinner")); // will  print our desired result
for (var i = 0; i < Guest_list4.length; i++) {
    console.log("".concat(i + 1, ".").concat(Guest_list4[i]));
}
