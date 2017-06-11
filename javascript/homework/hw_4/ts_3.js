/**
 * Created by Александр on 11.06.2017.
 */
function cutLine(str){
    if (str.length>20){
        return str.substring(0,20)+'...';
    }
    return str;
}

console.log(cutLine('dggfdgfd44 443rgfgdfg'));