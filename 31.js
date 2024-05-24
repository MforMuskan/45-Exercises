/* Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
var username = [];
//username = [] when username will be removed and else statement would print
//console.log(username);
if (username.length > 0) {
    for (var i = 0; i < username.length; i++) {
        if (username[i] == 'Admin') {
            console.log("Hello ".concat(username[i], ", would you like to see a status report?"));
        }
        else {
            console.log("Hello Dear ".concat(username[i], ", thank you for logging in again!"));
        }
    }
}
else {
    console.log('We need to find more users');
}
var username1 = ['Mehak', 'Muskan', 'Mahemm', 'Mahnoor', 'Mehwish'];
//username = [] when username will be removed and else statement would print
//console.log(username);
if (username1.length > 0) {
    for (var i = 0; i < username1.length; i++) {
        if (username1[i] == 'Admin') {
            console.log("Hello ".concat(username1[i], ", would you like to see a status report?"));
        }
        else {
            console.log("Hello Dear ".concat(username1[i], ", thank you for logging in again!"));
        }
    }
}
else {
    console.log('We need to find more users');
}
