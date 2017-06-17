/**
 * Created by Александр on 13.06.2017.
 */
var make_lazy = function () {

    var func = arguments[0];
    var arrOfArg = [];
    for(var i=1; i<arguments.length; i++){
        arrOfArg[i-1] = arguments[i];
    }
    // var argA = arguments[1];
    // var argB = arguments[2];
    return function () {

        return func.apply(this, arrOfArg);
    };
};

function add (a, b) {
    return a + b;
}

var lazy_value = make_lazy(add, 2, 3);

console.log(lazy_value());

var lazy_sum = make_lazy(add, 2, 3);
