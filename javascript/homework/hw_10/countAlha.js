/**
 * Created by Александр on 17.06.2017.
 */
function count (string) {
    // The function code should be here
    var obj = {};
    //var arr = string.split('');

    for(var i=0; i<string.length; i++)
    if(string[i] in obj){
        obj[string[i]] +=1;
    } else {
        obj[string[i]] =1;
    }

    return obj;
}

console.log(count('aasdda'));