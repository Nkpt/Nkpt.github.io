/**
 * Created by Александр on 11.06.2017.
 */
var user = {
    name: 'Sergey',
    surname: 'Petrov'
};

var emptyObj = {};

user.name = 'Andrey';
user.age = 30;

delete user.name;
// console.log(user);

function isEmpty(obj){
    for(var key in obj){
        return false;
    }
    return true;
}

// console.log(isEmpty(emptyObj));


function sumOfSalaries(obj){
    var sum = 0;
    for(var key in obj){
        sum+=obj[key];
    }
    return sum;
}

var salaries = {
    'junior': 1000,
    'middle': 2500,
    'senior': 3500,
    'lead': 5000
};

// console.log(sumOfSalaries(salaries));

function lastElement(mass) {
    return mass.pop();
}

var myMass = ['aw', 'hf', 'yfw'];
var myMass1 = [];
myMass1[0] = 12;
myMass1[2]=54;

// console.log(myMass1.length);

function addElement(mass, element){
    mass.push(element);
    return mass;
}

// console.log(addElement(myMass,myMass1));

var fruits = ['apple', 'orange'];

fruits.push('kiwi');
// console.log(fruits);
fruits[fruits.length-2]='pear';
// console.log(fruits);
fruits.shift();

// console.log(fruits);

fruits.unshift('aprciot', 'peach');

console.log(fruits);


function randElementOfMass(mass){

    var rand = Math.floor(Math.random()*(mass.length));
    return mass[rand];

}

console.log(randElementOfMass(fruits));
