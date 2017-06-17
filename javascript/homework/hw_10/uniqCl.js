/**
 * Created by Александр on 16.06.2017.
 */

function uniqPop(arr) {

    var obj = {};

    for (var i=0; i<arr.length; i++){
        if (arr[i] in obj){
            obj[arr[i]]++;
        } else {
            obj[arr[i]]=1;
        }
    }

    var arrOfProp=[];

    for (key in obj){
        arrOfProp.push({class:key, count:obj[key]});
    }

    arrOfProp.sort(function (a,b) {
        return b.count-a.count;
    });

    for (var j=0; j<arrOfProp.length; j++){
        arrOfProp[j]=arrOfProp[j].class;
    }

    return arrOfProp;

}

var arr2 = ['link', 'menu', 'menu__item', 'header', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link', 'header', 'header'];

console.log(uniqPop(arr2));
