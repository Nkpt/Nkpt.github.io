/**
 * Created by Александр on 17.06.2017.
 */
function isPangram(string){
    //...
    var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var str = string.toLowerCase();

    for(var i=0; i<alpha.length;i++){
        if(str.indexOf(alpha[i])===-1){
            return false;
        }
    }
    return true;

}