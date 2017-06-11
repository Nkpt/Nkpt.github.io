/**
 * Created by Александр on 11.06.2017.
 */
function fib(n){
    if(n===1||n===2) return 1;
    return fib(n-1)+fib(n-2);
}

console.log(fib(77));