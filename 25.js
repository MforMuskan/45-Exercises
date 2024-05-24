/* Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
• Write one version of this program that passes the if test and another that
fails. (The version that fails will have no output.)
*/
var alien_color = 'red';
// if statement
if (alien_color == 'green') {
    console.log('If the color of alien is green then the player will not earn any points'); // false statement ; won't print any statement
}
else {
    console.log('If the color of alien is red then the player will earn 5 points'); // true statement 
}
// if statement
var alien_color1 = 'green';
if (alien_color1 == 'red') {
    console.log('If the color of alien is red then the player will earn 5 points'); // false statement 
}
else {
}
