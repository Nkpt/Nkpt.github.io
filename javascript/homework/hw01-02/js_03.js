/**
 * Created by Александр on 10.06.2017.
 */
var userName=prompt('Введите логин' );
if (userName===null){
    alert('Canceled');
} else if (userName==='admin') {
    var userPassword =prompt('Введите пароль');
} else {
    alert('Access denied');
}