/**
 * Created by Александр on 15.06.2017.
 */
function work(a, b) {
    console.log( a + b ); // work - произвольная функция
}

function makeLogging(f, log) { /* ваш код */

    //var logArg = [].slice.call(f.arguments);
    //console.log(f.arguments);
    // console.log(logArg);
    //log = log.concat(logArg);
    // console.log(logArg);
    return function () {
        console.log(log);
        log.push([].slice.call(arguments));
        console.log(log);
        return f.apply(this, arguments);
    } ;

}

var log = [];
work = makeLogging(work, log);


work(1, 2); // 3
work(4, 5); // 9

console.log(log);

for (var i = 0; i < log.length; i++) {
    var args = log[i]; // массив из аргументов i-го вызова
    console.log( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
}