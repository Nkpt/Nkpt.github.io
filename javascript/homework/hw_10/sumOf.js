/**
 * Created by Александр on 16.06.2017.
 */
function add() {
    //CODE
    var sum=0;

    for(var i=0; i<arguments.length; i++){
        sum+=arguments[i]*(i+1);
        console.log(arguments);
    }
    return sum;
}

console.log(add(1,2,3));