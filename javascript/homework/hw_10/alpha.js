/**
 * Created by Александр on 16.06.2017.
 */
function inAlpha(str) {
    return str.toLowerCase().split('').sort().join('');
}

console.log(inAlpha('webmaster'));

function toUpFirstLet(str) {

    var arr = str.split(' ');
    var newarr = arr.map(function (item) {
       return item[0].toUpperCase()+item.slice(1);
        // console.log(item);
    });
    console.log(arr);
   return newarr.join(' ');
}

console.log(toUpFirstLet('the quick brown fox'));

function longestStr(str) {
    arr = str.split(' ').sort(function (a, b) {
        return b.length-a.length;
    });
    return arr[0];

}

console.log(longestStr('Web Development Tutornnvnbvbnvbnbvial'));

function newTypeOf(x) {
    return typeof x;
}

console.log(newTypeOf(44));