/**
 * Created by Александр on 11.06.2017.
 */
var userNumber = prompt('Введите число');
var userPow = prompt('Введите степень');

function pow(x, n){
    var resultOfPow = 1;
    for(var i=0; i<n; i++){
        resultOfPow*=x;
    }
    return resultOfPow;
}

console.log(pow(userNumber, userPow));