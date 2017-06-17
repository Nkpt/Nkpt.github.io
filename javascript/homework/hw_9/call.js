/**
 * Created by Александр on 15.06.2017.
 */
function sumArgs() {
    /* ваш код */



    function forReduce(a, b) {
        return a+b;
    }
    return [].reduce.call(arguments, forReduce);
}

console.log( sumArgs(1, 2, 3, 7, 3, 4, 5) ); // 6, аргументы переданы через запятую, без массива