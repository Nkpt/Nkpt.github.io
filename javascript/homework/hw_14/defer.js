/**
 * Created by Александр on 19.06.2017.
 */

Function.prototype.defer = function (time) {
  setTimeout(this, time);
};

function f1() {
    console.log( "привет" );
}



f1.defer(1000); // выведет "привет" через 1 секунду