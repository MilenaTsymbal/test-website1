/*
Оголосіть функцію fd(lst), яка отримує масив слів (тобто рядків) і повертає частотний словник,
складений з цього масиву слів. Словник - це об'єкт, властивостями якого є слова,
а значеннями - кількість входжень даного слова у заданий масив слів.

*/
//BEGIN
// function fd(words){
 
// }
// //END
// var states = ["de", "us", "ua", "ru", "ua", "us", "fr"];
// console.log(fd(states));   // {de: 1, us: 2, ua: 2, ru: 1, fr: 1}

let arr = ['as', 'ad', 'af', 'ag'];
let obj = {};
obj.size = arr.length;
let i = 0;
for(let key in obj){
   key = arr[i];
   i++;
}
console.log(obj)