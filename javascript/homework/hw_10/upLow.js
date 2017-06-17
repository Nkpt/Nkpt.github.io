/**
 * Created by Александр on 16.06.2017.
 */
function swap(str){
//code me

    var arr = str.split('');
    console.log(arr);
    console.log(arr[0]===arr[0].toUpperCase());
    for (var i=0; i<arr.length; i++){
        arr[i]===arr[i].toUpperCase()?arr[i]=arr[i].toLowerCase():arr[i]=arr[i].toUpperCase();
        console.log(arr[i]===arr[i].toUpperCase());
    }

    return arr.join('');

}

console.log(swap('sree'));