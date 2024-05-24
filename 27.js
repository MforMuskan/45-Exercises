/* Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color
alien. */
//1st Version of if else statement
var Alien_Color = 'red';
if (Alien_Color == 'green') {
    console.log('If the alien is green, the player will earn 5 points');
}
else if (Alien_Color == 'yellow') {
    console.log('If the alien is yellow, the player will earn 10 points');
}
else if (Alien_Color == 'red') {
    console.log('If the alien is red, the player will earn 15 points');
}
//2nd Version of if else statement
var Alien_Color1 = 'green';
if (Alien_Color1 == 'green') {
    console.log('If the alien is green, the player will earn 5 points');
}
else if (Alien_Color1 == 'yellow') {
    console.log('If the alien is yellow, the player will earn 10 points');
}
else if (Alien_Color1 == 'red') {
    console.log('If the alien is red, the player will earn 15 points');
}
//3rd Version of if else statement
var Alien_Color2 = 'yellow';
if (Alien_Color2 == 'green') {
    console.log('If the alien is green, the player will earn 5 points'); // false statement 
}
else if (Alien_Color2 == 'yellow') {
    console.log('If the alien is yellow, the player will earn 10 points'); // true statement 
}
else if (Alien_Color2 == 'red') {
    console.log('If the alien is red, the player will earn 15 points');
}
