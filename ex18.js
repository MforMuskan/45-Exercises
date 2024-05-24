//Think of at least five places in the world you’d like to visit.
//• Store the locations in an array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var my_fav_places = ['Shanghai', 'Venice', 'Berlin', 'Future Museum', 'Holy Kaaba'];
console.log(my_fav_places);
var sorted_list = __spreadArray([], my_fav_places, true).sort();
console.log(sorted_list);
console.log(my_fav_places);
var reverse_list = __spreadArray([], sorted_list, true).reverse();
console.log(reverse_list);
console.log(my_fav_places);
