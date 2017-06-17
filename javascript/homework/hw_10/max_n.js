/**
 * Created by Александр on 16.06.2017.
 */
function getMaxNumber(arr) {
    return arr.sort(function (a, b) {
        return b-a;
    })[0];
}
var m1 = getMaxNumber([1,30,40,2,7]); // 40
var m2 = getMaxNumber([1,15,-20,2,-7]); // 15

console.log(m1);
console.log(m2);

