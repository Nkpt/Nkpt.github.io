/**
 * Created by Александр on 22.06.2017.
 */
// рекурсия
// если obj !={}
// созд ul
// key in obj
// в запишем свойствo в текстНоду
// добавим в li
// вызываем функцию с (li,obj[key])



function createTree(elem, obj){
    if(obj==={}){return;}

    var ul = document.createElement('ul');

    for(var key in obj){
        var liText = appendChild(document.createTextNode(key));
        var li = document.createElement('li');
        li.appendChild(liText);
        createTree(li, obj[key]);
        ul.appendChild(li);
    }

}

var data = {
    "Рыбы": {
        "Форель": {},
        "Щука": {}
    },

    "Деревья": {
        "Хвойные": {
            "Лиственница": {},
            "Ель": {}
        },
        "Цветковые": {
            "Берёза": {},
            "Тополь": {}
        }
    }
};

var container = document.getElementById('container');
createTree(container, data); // создаёт