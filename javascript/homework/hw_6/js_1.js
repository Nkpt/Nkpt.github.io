/**
 * Created by Александр on 13.06.2017.
 */

function removeClass(obj, cls) {
    var massClass = obj.className.split(' ');
    var indOfCls = massClass.indexOf(cls);
    if (indOfCls>=0){
        massClass.splice(indOfCls, 1);
    }

    obj.className = massClass.join(' ');

    return obj;
}

var obj1 = {
    className: 'open kkkkk menu open open open menu menu blabla kkkkk 123'
};

/*removeClass(obj1, 'open');
console.log(obj1);
removeClass(obj1, 'blabla');
console.log(obj1);*/

function removeClassWithDupl(obj, cls) {
    var massClass = obj.className.split(' ');
    var indOfCls = massClass.indexOf(cls);

    while (indOfCls>=0){
        massClass.splice(indOfCls, 1);
        indOfCls = massClass.indexOf(cls);
    }

    /*if (indOfCls>=0){
        massClass.splice(indOfCls, 1);
    }*/

    obj.className = massClass.join(' ');

    return obj;
}

console.log(obj1);
removeClassWithDupl(obj1, 'open');
console.log(obj1);
removeClassWithDupl(obj1, 'kkkkk');
console.log(obj1);
removeClassWithDupl(obj1, 'menu');
console.log(obj1);
removeClassWithDupl(obj1, '123');
console.log(obj1);
removeClassWithDupl(obj1, 'blabla');
console.log(obj1);