/**
 * Created by Александр on 13.06.2017.
 */

function add(a, b) {
    return a+b;
}

function mul(a, b) {
    return a*b;
}

console.log(add(3, 4));

console.log(mul(3, 4));

function identityf(arg) {
    return function () {
        return arg;
    }
}

var idf = identityf(3);
console.log(idf());

function addf(arg) {
    return function (arg2) {
        return arg+arg2;
    };
}
console.log(addf(9)(4));

var add3 = function (a, b) {
    return a+b;
};

function applyf(binary) {
    return function (a) {
        return function (b) {
            return binary(a, b);
        };
    };
}

/*function applyf(binary) {
    return function(x) {
        return function(y) {
            return binary(x)(y);
        }
    }
}*/
/**/
// console.log(add3);
var addf2 = applyf(add3);
console.log(addf2(3)(4));

console.log(applyf(mul)(3)(4));
