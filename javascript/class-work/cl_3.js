/**
 * Created by Александр on 12.06.2017.
 */

function addClass(obj, cls) {
    /*var objKeys = Object.keys(obj);
    var indexClassName = objKeys.indexOf('className');*/
    // var strClass = obj.className;

    var massClass = obj.className.split(' ');
    // var isClsHere = massClass.indexOf(cls);
    if (massClass.indexOf(cls)===-1){
        massClass.push(cls);
    }
    obj.className= massClass.join(' ');
    // console.log(obj);
    return obj;
}

var testObj={
    className: 'open menu'
};

testObj = addClass(testObj, 'new');
// console.log(testObj.className);
testObj = addClass(testObj, 'open');
testObj = addClass(testObj, 'me');

console.log(testObj.className);