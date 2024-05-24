/* You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you
found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list. */
var guestlist = ['Fatima', 'Hania', 'Aliya', 'Saba', 'Maheem', 'Sadaf', 'Alishba'];
console.log("Great news, sweeties! I have found a bigger dinner table, so more friends are joining us at my graduation party!");
guestlist.unshift('Nadia');
guestlist.splice(4, 0, 'Kashish');
guestlist.push('Haseeba');
for (var i = 0; i < guestlist.length; i++) {
    console.log("Dear ".concat(guestlist[i], "!, I would like to invite you for dinner at my graduation party."));
}
