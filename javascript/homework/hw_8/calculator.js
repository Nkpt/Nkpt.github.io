/**
 * Created by Александр on 14.06.2017.
 */

function Calculator() {
    Calculator.methods = {
        '+': function (a, b) {
            return a+b;
        }
    };

    this.calculate = function (str) {
        var arr = str.split(' ');
        return Calculator.methods[arr[1]](+arr[0], +arr[2]);
    };

    this.addMethod = function (sign, binaryFunc) {
        Calculator.methods[sign] = binaryFunc;
    };

}

var calc = new Calculator;



console.log( calc.calculate('3 + 7') ); // 10

var superCalc = new Calculator();
superCalc.addMethod('*', function (a, b) {
   return a*b;
});

superCalc.addMethod('**', function(a, b) {
    return Math.pow(a, b);
});


console.log( superCalc.calculate('10 + 7') );

console.log( superCalc.calculate('10 * 7') );

console.log( superCalc.calculate('2 ** 6') );

var result = superCalc.calculate('2 ** 3');
console.log( result ); // 8

console.log( calc.calculate('2 ** 7') );
