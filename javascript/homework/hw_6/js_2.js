/**
 * Created by Александр on 13.06.2017.
 */
function sortArr(arr) {
    var newArr = [];


    for(var i=0; i<arr.length; i++){
        newArr[i]= arr[i];
    }

    return newArr.sort();
}

var arr = ['HTML', 'JavaScript', 'CSS'];

var mySorArr = sortArr(arr);

console.log(mySorArr);
console.log(arr);

function randomSort(a, b) {
    return Math.round(Math.random()*2-1);
}

var numArr = [1,2,3,4,5,6,7,8,9,10];
numArr.sort(randomSort);
console.log(numArr);