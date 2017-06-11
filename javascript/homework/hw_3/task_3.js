/**
 * Created by Александр on 11.06.2017.
 */
var firstNumber=1, lastNumber=100;

for(var i = firstNumber; i<=lastNumber; i++){
    if(i%3){
        if(i%5){
            // continue;
        } else {
            console.log(i,': Buzz');
        }
    } else {
        console.log(i,': Fizz');
    }

}