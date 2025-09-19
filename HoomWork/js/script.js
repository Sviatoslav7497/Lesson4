//-1---
// Перепишіть функцію використовуючи "?" або '||'

// function checkAge(age) {
// if (age > 18) {
// return true;
// } else {
// return confirm('Батьки дозволили?');
// }
// }

// const age =+prompt("Введіть ваш вік:");

// function ask(age, yes, no) {
//     if (age > 18) {
//         yes();
//     } else {
//         no();
//     }
// }

// function yes() {
//     return true;
// }

// function no() {
//     return confirm('Батьки дозволили?');
// }

// ask(age, yes, no);

// function checkAge(age) {
//     return age > 18 ? true : confirm('Батьки дозволили?');
// }

// function checkAge(age) {
//     return age > 18 || confirm('Батьки дозволили?');
// }

// checkAge(age);

// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b

// const a  = +prompt("Введіть перше число:");
// const b  = +prompt("Введіть друге число:");

// function min (a,b) {
//     if (a<b) {
//         console.log(a);
//     }
//     else {
//         console.log(b);
//     }
// }

// min(a,b);

// ---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
// if (confirm(question)) yes();
// else no();
// }

// ask(
// "Ви згодні?",
// function() { alert("Ви погодились."); },
// function() { alert("Ви скасували виконання."); }
// );

// const ask = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
// }

// ask(
//     "Ви згодні?",
//     () =>alert("Ви погодились."),
//     () =>alert("Ви скасували виконання.")
// );
