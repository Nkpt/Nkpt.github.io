/**
 * Created by Александр on 12.06.2017.
 */

function toCamelCase(str) {
    var wordMass = str.split('-');

    //Пропускаем первое слово
    for (var i = 1; i<wordMass.length; i++){
        wordMass[i]=wordMass[i].charAt(0).toUpperCase()+wordMass[i].substring(1);
    }
    // str = wordMass.join('');
    return wordMass.join('');
}

// toCamelCase('background-color');
console.log(toCamelCase('background-color'));
console.log(toCamelCase('list-style-image'));
console.log(toCamelCase('-webkit-transition'));