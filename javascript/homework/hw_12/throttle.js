/**
 * Created by Александр on 18.06.2017.
 */

// Напишите функцию throttle(f, ms) – «тормозилку»,
// которая возвращает обёртку, передающую вызов f не чаще,
// чем раз в ms миллисекунд.

function func(x) {
    console.log(x);
}

function throttle(func, time) {
    var ctx;
    var args;
    var isFree = true;

    function wrapper() {


        if(isFree){
            func.apply(this, arguments);
            isFree = false;
            setTimeout(function () {
                isFree = true;
                if(args){
                    wrapper.apply(ctx, args);
                    ctx=args=null;
                }
            }, time);
        } else {
            ctx = this;
            args = arguments;
            return;
        }


    }
    return wrapper;
}

var f1000 = throttle(func, 1000);

f1000(1); // выведет 1
f1000(2); // (тормозим, не прошло 1000 мс)
f1000(3); // (тормозим, не прошло 1000 мс)
setTimeout(function () {
    f1000(4);
 }, 1100);
f1000(5);


/*function throttle(func, ms) {

    var isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {

        if (isThrottled) { // (2)
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments); // (1)

        isThrottled = true;

        setTimeout(function() {
            isThrottled = false; // (3)
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}*/

 /*
function debounce(func, time) {
    var free = true;
    debounce.last = '';

    return function () {
        if (free){
            func.apply(this, arguments);
            free = false;
            setTimeout(function () {
                free = true;
                if(debounce.last!==''){
                func.apply(null, debounce.last);}
            }, time);

        } else {
            //lastFunc = this;
            debounce.last = arguments;

            // var lastCtx = this;
            // console.log(lastFunc);
            // var arrg = arguments;
            // setTimeout(function () {
            //     if(lastFunc === debounce.last) {
            //         console.log('fdfsfsfsdfsf');
            //         func.apply(null, arrg);
            //     }
            // }, time);
        }
    }
}

var func1 = debounce(func, 1000);

func1(1);
func1(2);
func1(3);
func1(4);
func1(5);*/
// setTimeout(function () {
//     func1(3);
// }, 50);
// func1(2);
// func1(2);
// func1(2);


// setTimeout(function () {
//     func1(3);
// }, 100);
//
// setTimeout(function () {
//     func1(4);
// }, 1100);
//
// setTimeout(function () {
//     func1(5);
// }, 1500);
// setTimeout(function () {
//     func1(6);
// }, 2500);
// setTimeout(function () {
//     func1(7);
// }, 2700);

// f1000(1); // выведет 1
// f1000(2); // (тормозим, не прошло 1000 мс)
// f1000(3); // (тормозим, не прошло 1000 мс)