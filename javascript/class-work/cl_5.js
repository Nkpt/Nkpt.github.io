/**
 * Created by Александр on 12.06.2017.
 */
var arr = ['Есть', 'жизнь', 'на', 'Марсе'];

var newArr = arr.map(function(name){
    return name.length;
})

console.log(arr);
console.log(newArr);

function sum() {
    var sum = 0;
    for(var i=0; i<arguments.length; i++){
        sum+=arguments[i];
    }
    return sum;
}

console.log(sum(10,10,100));