/**
 * Created by Александр on 10.06.2017.
 */
var randomNumber=prompt('Введите число');
if (randomNumber>0){
    alert('1');
} else if (randomNumber<0){
    alert('-1');
} else if(+randomNumber===0) {
    alert('0');
} else {
    alert('Вы ввели не число!');
}