/**
 * Created by Александр on 12.06.2017.
 */
function find(arr, value) {
    for(var i = 0; i<arr.length; i++){
        if(arr[i]===value){
            return i;
        }

    }
    return -1;
}

var myArray=['Mi', 'Di', {age: 30, color: 'red'}, ['0', 'hey']];

// console.log(find(myArray, 'di'));

function filterRange(arr, a, b){
    var newArr=[];
    for(var i = 0; i<arr.length; i++){
        if(arr[i]<a||arr[i]>b){
            continue;
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

var numArr = [5, 7, 4, 8, 3, 0];
var numArr1 = [1, 7, 4, 3, 3, 10, 71, 2];


console.log(filterRange(numArr1, 2,10));