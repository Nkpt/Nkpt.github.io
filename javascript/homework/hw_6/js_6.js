/**
 * Created by Александр on 13.06.2017.
 */

// очищаем массив о анаграмм

//копирует массив и обращает его
function cloneMass(mass) {
    var newMass = [];

    for (var i=0; i<mass.length; i++){
        newMass[i]=mass[i];
    }

    return newMass;
}

function deleteItem(arr, item) {

    while(arr.indexOf(item)!==-1){
        arr.splice(arr.indexOf(item), 1);
    }

    return arr;

}

//Создаем новый массив состоящий из уникальных элементов
function unique(arr) {

    var arrCopy = cloneMass(arr);

    var newArr = [];
    var countUnique = 0;

    while(arrCopy.length!==0){
        newArr[countUnique] = arrCopy[0];
        deleteItem(arrCopy, arrCopy[0]);
        countUnique++;
    }

    return newArr;
}


function anClean(arr) {
    var newArr=[];

    for(var i = 0; i<arr.length;i++){
        newArr[i] = arr[i].toLowerCase().split('').sort().join('');
    }
    var arrWithoutAn = unique(newArr);

    // console.log(arrWithoutAn);

    for (var i=0; i<arrWithoutAn.length; i++){
        arrWithoutAn[i]=arr[newArr.indexOf(arrWithoutAn[i])];
    }

    return arrWithoutAn;
}

var arr = ['Кробиг','вОз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор', 'котсер'];

console.log( anClean(arr) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'
