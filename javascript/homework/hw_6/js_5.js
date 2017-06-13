/**
 * Created by Александр on 13.06.2017.
 */
// Уникальные элементы массива

//Удаляем из массива элемент и его дубликаты
function deleteItem(arr, item) {

    while(arr.indexOf(item)!==-1){
        arr.splice(arr.indexOf(item), 1);
    }

    return arr;

}

//Создаем новый массив состоящий из уникальных элементов
function unique(arr) {
    var newArr = [];
    var countUnique = 0;

    while(arr.length!==0){
        newArr[countUnique] = arr[0];
        deleteItem(arr, arr[0]);
        countUnique++;
    }

    return newArr;
}

var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];

console.log( unique(strings) ); // кришна, харе, 8-()
