//You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equalto, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in an array
//• Test whether an item is not in an array
1.; //Equality and In-Equality
var Today = "Saturday";
console.log(Today == 'Saturday'); /* where == shows Equality */
console.log(Today !== 'Saturday'); /* wnere !== shows non equality */
2.; //Using lower case function
console.log(Today !== 'saturday'); // where !== shows in equaltiy but statement will be true due to lower case function
3.; //Numerical testing for comparision operator
var total_Marks = 56;
var a = 30 + 26;
console.log(total_Marks == a); // true
console.log(total_Marks !== 56); //false
console.log(total_Marks !== 50); //true
console.log(total_Marks >= 60); //false where >= shows greater than equals to
console.log(total_Marks <= 56); //true   where <= shows lesser than equals to
console.log(a > 45); //true   where > shows greater than 
console.log(a < 25); //false   where > shows lesser than
4.; //Using AND and OR operators
var num1 = 32, num2 = 19;
console.log(num1 > 22 && num2 < 20); // true  ;as both is correct
console.log(num1 > 42 && num2 < 20); // false ;because one of them is wrong
console.log(num1 > 42 || num2 < 20); // true  ;if any of each is correct
5.; //Test whether an item is in an array or not an array
var My_array = [23, 97, 1, 'Senim', 'Ozge'];
var My_string = 'Deniz';
console.log(Array.isArray(My_array)); // true ; My_array is an array
console.log(Array.isArray(My_string)); //false; My_string is not an
