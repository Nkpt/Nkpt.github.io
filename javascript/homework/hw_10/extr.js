/**
 * Created by Александр on 16.06.2017.
 */
var obj = {
    person1Age: 20,
    person1Name: 'Ivanov',
    person2Age: 30,
    person2Name: 'Petrov',
    person3Age: 40,
    person3Name: 'Sidorov'
};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function extractNumber(obj) {
    var numArr = [];
    for(key in obj){
        if(isNumeric(obj[key])){
            numArr.push(obj[key]);
        }
    }
    return numArr;
}

function extractString(obj) {
    var strArr = [];
    for(key in obj){
        if( typeof(obj[key])==='string'){
            strArr.push(obj[key]);
        }
    }
    return strArr;
}

var newNum = extractNumber(obj);
console.log(newNum);
var newStr = extractString(obj);
console.log(newStr);

var ages = [20,30,40];
var names = ['Ivanov', 'Petrov', 'Sidorov'];

console.log((''+newNum)===(''+ages));

console.log(''+newStr===''+names);