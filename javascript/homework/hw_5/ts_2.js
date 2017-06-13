/**
 * Created by Александр on 12.06.2017.
 */

function taskCompleted(obj) {
    // var maxTask=0;
    var whoMore=['', 0];

    for(var key in obj){
        if (obj[key]>whoMore[1]){
            whoMore[0]=key;
            whoMore[1]=obj[key];
        }
    }
    return whoMore;
}

var listOfMan = {
    'Anna': 29,
    'Serg': 35,
    'Elrna': 1,
    'Anton': 9
};

// console.log(taskCompleted(listOfMan));

function multiplyNumeric(obj) {
        for(var key in obj){
            if (obj[key]===null) continue;
            if(isFinite(obj[key])){
                obj[key]*=2;
            }
        }
        return obj;
}

var image = {
    width: 100,
    height: 400,
    title: 'Cool image',
    g: undefined,
    h: NaN,
    f: Infinity,
    j: null
};

console.log(multiplyNumeric(image));