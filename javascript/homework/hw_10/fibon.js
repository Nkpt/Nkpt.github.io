/**
 * Created by Александр on 17.06.2017.
 */
function fibonacci(n) {
    //return fibonacci array of n elements

    if(n>1){

        var arrFib = [0,1];
        //arrFib[0]=0;
        for(var i=2; i< n; i++){
            arrFib[i] = arrFib[i-1]+arrFib[i-2];
        }
        return arrFib;
    } else if(i===1){
        return [0];
    } else {
        return [];
    }



}

console.log(fibonacci());