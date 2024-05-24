/*Make an array of five or more usernames, including the name 'admin'. Imagine you are writing
code that will print a greeting to each user after they log in to a website. Loop through the array, and
print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a
status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again*/
var Username = ['Admin', 'Endir', 'Demir', 'Defne', 'Filiz'];
for (var i = 0; i < Username.length; i++) {
    if (Username[i] == 'Admin') {
        console.log("Hello ".concat(Username[i], ", would you like to see a status report?"));
    }
    else {
        console.log("Hello Dear ".concat(Username[i], ", thank you for logging in again!"));
    }
}
