/**
 * Created by Александр on 19.06.2017.
 */
// Define MyNamespace ...

function MyNamespace(){

}
MyNamespace.MyClass = function(str){
    this.sayHello = function(){
        return str;
    }
};

var myObject = new MyNamespace.MyClass('Hello!');

var phrase = myObject.sayHello(); // phrase should be 'Hello!'
console.log(phrase);