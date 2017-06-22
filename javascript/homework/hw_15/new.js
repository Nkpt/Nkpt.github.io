/**
 * Created by Александр on 20.06.2017.
 */


function Greeting(name) {
    this.name = name;
}

Greeting.prototype.sayHello = function() {
    return "Hello " + this.name;
};

Greeting.prototype.sayBye = function() {
    return "Bye " + this.name;
};

function construct(Class) {

    args = Array.prototype.slice.call(arguments,1);
    var nConst = function (ag) {
        Class.apply(this,ag);
    };
    nConst.prototype = Class.prototype;

    return new nConst(args);
}

var greeting = construct(Greeting, 'John');
console.log(greeting.sayBye());

var obj1 = new Greeting('Joo');
