/* Write a function that stores information about a car in an Object. The function should always
receive a manufacturer and a model name. It should then accept an arbitrary number of keyword
arguments. Call the function with the required information and two other name-value pairs, such as
a color or an optional feature. Print the Object that’s returned to make sure all the information was
stored correctly.*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//Car in an object
function Cardetails(manufacturer, model_name) {
    var additionalinfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additionalinfo[_i - 2] = arguments[_i];
    }
    var car = __assign({ manufacturer: manufacturer, model_name: model_name }, Object.fromEntries(additionalinfo));
    return car;
}
var mycardetails = Cardetails('Toyota', 'Supra', ['Color', 'Blue'], ['Year', '2022']);
console.log(mycardetails);
