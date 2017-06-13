/**
 * Created by Александр on 13.06.2017.
 */

function sortObjAge(obj1, obj2) {

    return obj1.age-obj2.age;

}

var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };

var people = [ vasya , masha , vovochka ];

console.log(people);

people.sort(sortObjAge);

console.log(people);
var spisok = '';

for(var i=0; i<people.length; i++){
    i!==people.length-1? spisok+= people[i].name+', ': spisok+= people[i].name+'.';

}
console.log(spisok);
