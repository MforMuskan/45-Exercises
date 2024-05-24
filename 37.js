/* Modify the make_shirt() function so that shirts are large by default, with a message that reads
I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any
size with a different message.
*/
//Modify the make_shirt() function so that shirts are large by default
//function make_shirt(size: number, label: string) {
console.log('FOR LARGE');
function make_shirt(label, size) {
    if (size === void 0) { size = 'Large'; }
    return size + label;
}
var result1 = make_shirt(' I love TypeScript');
console.log('The shirt size is', result1);
console.log('FOR MEDIUM');
function make_shirt1(label, size) {
    if (size === void 0) { size = 'Medium'; }
    return size + label;
}
var result2 = make_shirt1(' I love TypeScript');
console.log('The shirt size is', result2);
console.log('FOR ANY SIZE');
function make_shirt2(label, size) {
    if (size === void 0) { size = 30; }
    return size + label;
}
var result3 = make_shirt2(' I love TypeScript', 42);
console.log('The shirt size is', result3);
