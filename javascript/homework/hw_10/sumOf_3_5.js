/**
 * Created by Александр on 17.06.2017.
 */
function solution(number){

    var arr = [];

    var index = 0;

    for (var i = number-1; i>0;i--){
        if(i%5===0){
            index+=i;
        } else if(i%3 === 0){
            index+=i;
        }
    }

    return index;

}