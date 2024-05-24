/* Write a function called make_shirt() that accepts a size and the text of a message that should
be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the
message printed on it. Call the function.
*/
function make_shirt(size, label) {
    return size + label;
}
var result = make_shirt(36, ' & National Aeronautics and Space Administration');
console.log('The shirt size is', result, 'is the label of the shirt');
