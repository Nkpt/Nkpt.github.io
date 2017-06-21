/**
 * Created by Александр on 19.06.2017.
 */

/*Присвойте объектам ссылки __proto__ так, чтобы любой поиск чего-либо шёл по алгоритму
pockets -> bed -> table -> head.*/

var head = {
    glasses: 1
};

var table = {
    pen: 3
};

table.__proto__=head;

var bed = {
    sheet: 1,
    pillow: 2
};

bed.__proto__=table;

var pockets = {
    money: 2000
};

pockets.__proto__=bed;

console.log(pockets.pen);// 3,
console.log(bed.glasses);// 1, но
console.log(table.money);// undefined