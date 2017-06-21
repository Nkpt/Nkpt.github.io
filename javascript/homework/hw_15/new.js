/**
 * Created by Александр on 20.06.2017.
 */


function Greeting(name) {
    this.name = name;
    return {name: '3434'};
}

Greeting.prototype.sayHello = function() {
    return "Hello " + this.name;
};


Greeting.prototype.sayBye = function() {
    return "Bye " + this.name;
};

function construct(Class) {
    //var arr = [].slice.call(arguments,1);
//     console.log(Class);
// //arr.shift();
//     var obj = {};
//     console.log((function () {
//        return Class.apply(this,arr);
//     })());
    //console.log(arguments[1]);
    var obj = Greeting.apply(this, arguments);
    //var obj = Class.call(this,arguments[1]);
    console.log(obj);
}

var greeting = construct(Greeting, 'John');
console.log(greeting);

// function factory() {
//     return {
//         createGreeting() {
//             return construct(Greeting, arguments);
//         }
//         ...
// }
// }
var obj1 = {};
var obj = Greeting.call(obj1, 'Ken');
console.log(obj);