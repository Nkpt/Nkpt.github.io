/**
 * Created by Александр on 16.06.2017.
 */
function duplicates(arr) {

    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
                newArr.push(arr[i]);
            }
        }
    }
    return newArr;


}

console.log(duplicates([1,2,3,4,4,1]));