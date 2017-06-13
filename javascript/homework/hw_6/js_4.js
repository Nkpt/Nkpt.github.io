/**
 * Created by Александр on 13.06.2017.
 */
//Проверка на палиндром

    //копирует массив и обращает его
    function reverseMass(mass) {
        var newMass = [];

        for (var i=0; i<mass.length; i++){
            newMass[i]=mass[i];
        }

        return newMass.reverse();
    }

    //проверяет совпадает ли исходный массив с обращенным
    function isPal(str) {
        str = str.toLowerCase(); //убирае заглавные
        var mass = str.split(' ').join('').split('');//убираем пробелы и делим на буквы
        var massRev = reverseMass(mass);

        for (var i=0; i<mass.length; i++){
            if(mass[i]!==massRev[i]) return false;
        }

        return true;
    }

console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false



