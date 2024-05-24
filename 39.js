/* Write a function called city_country() that takes in the name of a city and its country. The
function should return a string formatted like this: "Lahore, Pakistan" Call your function with at least
three city-country pairs, and print the value that’s returned.
*/
function city_country(city_name, country_name) {
    return "City name = ".concat(city_name, " ,  Country name = ").concat(country_name);
}
var City_Country = city_country('Berlin', 'Germany');
console.log(City_Country);
var City_Country2 = city_country('Seoul', 'Korea');
console.log(City_Country2);
var City_Country3 = city_country('Shanghai', 'China');
console.log(City_Country3);
