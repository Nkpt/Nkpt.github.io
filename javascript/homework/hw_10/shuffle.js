/**
 * Created by Александр on 16.06.2017.
 */

function suffle(arr) {
    var arrCopy = arr.slice();
    var newArr = [];
    var larr = arrCopy.length;
    var rNum = 0;

    for(var i =0; i<larr; i++){
        rNum = Math.round(Math.random()*(arrCopy.length-1));
        newArr[i] = arrCopy[rNum];
        arrCopy.splice(rNum,1);
    }

    return newArr;
}

var arrTest = [1,2,3,4,5,6,7,8,9,10];

var arrTest1 = suffle(arrTest);

console.log(arrTest);
console.log(arrTest1);


