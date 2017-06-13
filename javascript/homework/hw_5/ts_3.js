/**
 * Created by Александр on 12.06.2017.
 */

var userNumber = prompt('Введите число');
count = 0;
var massNumber = [];
var sumOfNumber= 0;

while (userNumber!=null && userNumber!=''){
    massNumber[count] = +userNumber;
    count++;
    userNumber = prompt('Введите еще число');
}

for(var i =0; i<massNumber.length; i++){
    sumOfNumber += massNumber[i];
}

console.log(sumOfNumber);
