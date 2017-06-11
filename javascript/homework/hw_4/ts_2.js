/**
 * Created by Александр on 11.06.2017.
 */
function checkSpam(str){
    var spamText1='spam';
    var spamText2='sex';

    if(str.toLowerCase().indexOf(spamText1)<0 && str.toLowerCase().indexOf(spamText2)<0){
        return false;
    } else {
        return true;
    }
    }
console.log(!!checkSpam('New PSD template'));