/* Write a function called describe_city() that accepts the name of a city and its country. The
function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the
country a default value. Call your function for three different cities, at least one of which is not in the
default country.
*/
function describe_city(city_name, Country) {
    if (city_name === void 0) { city_name = 'Rome'; }
    if (Country === void 0) { Country = 'Italy'; }
    return "".concat(city_name, " is the city of ").concat(Country);
}
var Describe_City = describe_city('Florence');
console.log(Describe_City);
var Describe_City1 = describe_city('Milan');
console.log(Describe_City1);
var Describe_City2 = describe_city('Tokyo', 'Japan');
console.log(Describe_City2);
var Describe_City3 = describe_city();
console.log(Describe_City3);
