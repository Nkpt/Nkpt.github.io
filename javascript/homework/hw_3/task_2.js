/**
 * Created by Александр on 11.06.2017.
 */
var firstNumber =2;
var lastNumber = 10;

function isSimple(useNumber){
    if(useNumber===2){
        return true;
    }
    for(var i=2; i<useNumber; i++){
        if(useNumber%i===0){
            return false;
        }
        if(i===useNumber-1){
            return true;
        }

    }
}

var count=firstNumber;

while (count<=lastNumber){
    if(isSimple(count)){
        console.log(count);
    }
    count++;
}

