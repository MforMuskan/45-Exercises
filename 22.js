/* //If you haven’t received an array index error in one of your programs yet, try to make one happen.Change an index
in one of your programs to produce an index error. Make sure you correct the error before closing the program.
*/
//let Guest_list5 : string [] = ['Haseeba', 'Sadaf', 'Maheem', 'Alishba', 'Umm-e-Hani', 'Aliya',3000]; => colud make an issue because I have defined type of variable
var Guest_list5 = ['Haseeba', 'Sadaf', 'Maheem', 'Alishba', 'Umm-e-Hani', 'Aliya'];
var n_list2 = Guest_list5.unshift('Kashish');
//console.log(`I am inviting $(n_list2) friends to dinner`) => will not print our desired result
console.log("I am inviting ".concat(n_list2, " friends to dinner"));
for (var i = 0; i < Guest_list5.length; i++) {
    console.log("".concat(i + 1, ".").concat(Guest_list5[i]));
}
