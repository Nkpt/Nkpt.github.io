/**
 * Created by Александр on 17.06.2017.
 */
function delay(func, time) {
    return function () {
        var args = arguments;
        var ctx = this;

        setTimeout(function () {
            func.apply(ctx, args);
        }, time);

    }
}

function f(x) {
    console.log('Hello: ' + x);
}

var f1000 = delay(f, 1000);

var f1500 = delay(f, 1500);

f1000('Hello: test');
f1500('Hello: test2');