/**
 * Created by Александр on 17.06.2017.
 */
function func(x) {
    console.log(x);
}

/*function debounce(func, time) {
    debounce.timeLast = 0;
    return function () {
        var timeNow = Date.now();
        if(timeNow - debounce.timeLast<time){
            //return;
        } else {
            debounce.timeLast = timeNow;
            return func.apply(this, arguments);
        }
    }
}*/

function debounce(func, time) {
    var free = true;
    return function () {
        if (free){
            func.apply(this, arguments);
            free = false;
            setTimeout(function () {
                free = true;
            }, time);

        }
    }
}

var func1 = debounce(func, 1000);

func1(1);
func1(2);

setTimeout(function () {
    func1(3);
}, 100);

setTimeout(function () {
    func1(4);
}, 1100);

setTimeout(function () {
    func1(5);
}, 1500);
setTimeout(function () {
    func1(6);
}, 2500);