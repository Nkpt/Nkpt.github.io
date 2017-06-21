/**
 * Created by Александр on 19.06.2017.
 */
var Singleton = function(){
    // implement singleton Class


     //var instance = this;// = Object.create(this);
    //Singleton.constructor = Singleton;
    return (function () {
        this.__proto__ =  Object.create(Singleton.prototype);
        return this;
    })();


};

var obj1 = new Singleton();
var obj2 = new Singleton();
console.log(obj1 === obj2); // => true
obj1.test = 1;
console.log(obj2.test); // => 1

console.log( obj1 instanceof Singleton);