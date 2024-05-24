/* You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll
have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/
var Guest_list1 = ['Haseeba', 'Sadaf', 'Maheem', 'Alishba', 'Umm-e-Hani', 'Kashish', 'Aliya'];
console.log('Sorry!', Guest_list1[6], 'I can not make it ');
Guest_list1[6] = 'Fatima';
console.log('Dear', Guest_list1[0], '!, I would like to inviate you at my graduation party.');
console.log('Dear', Guest_list1[1], '!, I would like to inviate you at my graduation party.');
console.log('Dear', Guest_list1[2], '!, I would like to inviate you at my graduation party.');
console.log('Dear', Guest_list1[3], '!, I would like to inviate you at my graduation party.');
console.log('Dear', Guest_list1[4], '!, I would like to inviate you at my graduation party.');
console.log('Dear', Guest_list1[5], '!, I would like to inviate you at my graduation party.');
console.log('Dear', Guest_list1[6], '!, I would like to inviate you at my graduation party.');
