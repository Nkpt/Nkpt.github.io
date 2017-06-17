/**
 * Created by Александр on 16.06.2017.
 */
function f(a,b) {
    return Math.random() * a + b; // random для удобства тестирования
}

function makeCaching(f) { /* ваш код */
    var cashObj={};
    return function () {


        if([[].slice.call(arguments)] in cashObj){
            return cashObj[[].slice.call(arguments)];
        }
        return cashObj[[].slice.call(arguments)]=f.apply(this, arguments);
    }

}



f = makeCaching(f);

var a, b;

a = f(1, 9);
console.log(a);
b = f(1, 9);
console.log(b);
console.log( a == b ); // true (значение закешировано)

b = f(2, 7);
console.log( a == b ); // false, другой аргумент => другое значение
