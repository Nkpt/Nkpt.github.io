/**
 * Created by Александр on 11.06.2017.
 */
function sumTo(userNumber){
    if(userNumber!=1){
        return userNumber+sumTo(userNumber-1);
    } else {
        return userNumber;
    }

}

// console.log(sumTo(+prompt('Число')));

function factorial(n){
    if(n===1) return 1;
    return n*factorial(n-1);
}

console.log(factorial(+prompt('Число')));

console.log(((Math.random()*10)).toFixed(0));

function randNumber(min, max){
   return Math.round(Math.random()*(max-min)+min);
}

for(var i=0; i<10; i++) console.log(randNumber(10, 17));

function upperFirst(str) {
    if(str.length===0) return str;
    return str[0].toUpperCase() + str.substring(1);
}

console.log(upperFirst('derskiy'));